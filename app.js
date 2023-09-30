import express from "express";
import speakeasy from "speakeasy";
import { usersData } from "./data/index.js"
import QRCode from 'qrcode'
import { users } from "./config/mongoCollections.js";
import jwt from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import { config_secret } from "./config/auth.config.js"
import nodemailer from "nodemailer"
import 'dotenv/config'

const app = express()

const corsOptions = {
  origin: "http://localhost:3001"
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "AuthCookie",
    keys: ["COOKIE_SECRET"],
    httpOnly: true
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Two factor auth!' });
});

app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    const secret = speakeasy.generateSecret({ length: 20 });
    const qr = await QRCode.toDataURL(secret.otpauth_url)
    await usersData.createUser(name, email, password, secret, qr)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    await transporter.verify();
    const content = `Hello,

    Welcome to XXX app. You received this email because we invited you to use our services.
    
    As a final step, scan the QR code below using Google or Microsoft Authenticator.

    You will be required to type the token generator to log in.`
    transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: `${email}`,
      subject: 'test sendmail',
      html: '<p>' + content + '</p><img src="' + qr + '"><p>Have a nice day!<br></br>XXX</p>' 
    }, function(err, reply) {
      // console.log(err && err.stack);
      // console.dir(reply);
  });

    return res.send(`<h3>TEMP SECRET:  ${secret.base32}</h3> 
  <h3> user name: ${name} </h3> <img src=${qr}> `)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error generating secret'
    })
  }
});

app.post("/api/login", async (req, res) => {
  let { email, password, token } = req.body
  const userCollection = await users();
  const userInfo = await userCollection.findOne({ email: email })
  if (!userInfo || userInfo.password !== password) {
    return req.status(401).send("Invalid credentials");
  }

  const { base32: secret } = userInfo.secret
  const verified = speakeasy.totp.verify({
    secret,
    encoding: "base32",
    token,
    window: 1,
  })
  if (!verified) {
    return res.status(401).send("Invalid token")
  }
  const jstoken = jwt.sign({ email, password }, config_secret.secret, { algorithm: 'HS256', expiresIn: 86400 })
  if (!jstoken) {
    return res.status(401).send("Invalid Credentials")
  }
  res.send({ jstoken, msg: "Login successful" })
})

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});