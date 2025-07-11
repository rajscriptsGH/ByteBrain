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
        res.status(403).json({
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

        res.status(201).json({
            msg: "Signed up"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error creating user",
            error: error
        })
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