import { users } from "../config/mongoCollections.js";


export const createUser = async (name, email, password, secret, qr) => {
    const userCollection = await users()

    const newUser = {
        name,
        email,
        password,
        secret,
        qr
    }
    const newInsertInfo = await userCollection.insertOne(newUser);
    if (!newInsertInfo.insertedId) throw `Error: Insert failed!`
    return newInsertInfo
}