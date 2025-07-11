import express from 'express'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { UserModel } from './db'

dotenv.config()
const app = express()
const port = 3300

app.use(express.json())


app.post('/api/v1/signup/', async (req, res) => {
    //use zod 
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(411).json({
            msg: "Wrong credentials"
        })
    }

    //hash password
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        await UserModel.create({
            username: username,
            password: hashPassword
        })

        return res.status(200).json({
            msg: "Signed up"
        })
    } catch (err: any) {
        if (err.code === 11000) {
            // duplicate username
            return res.status(409).json({
                msg: "User already exists"
            });
        }

        // Other unknown errors
        console.error("Signup error:", err);
        return res.status(500).json({
            msg: "Something went wrong",
            error: err.message
        });
    }

})

app.post('/api/v1/signin/', (req, res) => {

})
app.post('/api/v1/content/', (req, res) => {

})
app.get('/api/v1/content/', (req, res) => {

})
app.delete('/api/v1/content/', (req, res) => {

})
app.delete('/api/v1/brain/share', (req, res) => {

})
app.get('/api/v1/brain/:shareLink', (req, res) => {

})





app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});