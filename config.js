import 'dotenv/config'
import { google } from "googleapis"

require('dotenv').config()
const googleOAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

export { googleOAuth2Client }