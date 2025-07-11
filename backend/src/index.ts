import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ContentModel, UserModel } from './db'
import dotenv from 'dotenv'
import { JWT_SECRET } from './config'
import { userMiddleware } from './middleware'

dotenv.config()
const app = express()
app.use(express.json())

const port = process.env.port || 3300


//signup route
app.post('/api/v1/signup/', async (req, res) => {
    //use zod 
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            msg: "Missing inputs"
        })
    }

    try {
        //hash password
        const salt = await bcrypt.genSalt(5);
        const hashPassword = await bcrypt.hash(password, salt);

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

app.post('/api/v1/signin/', async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password

        if (!username || !password) {
            return res.status(401).json({
                msg: "username & password required"
            })
        }

        const user = await UserModel.findOne({
            username
        })

        if (!user) {
            return res.status(404).json({
                msg: "User not found"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.status(401).json({
                msg: "Invalid password"
            })
        }

        const token = jwt.sign({
            id: user._id,
            username: user.username
        }, JWT_SECRET)

        return res.status(200).json({
            msg: "Login successful",
            token,
        });

    } catch (error) {
        console.log("Signin error");

        return res.status(411).json({
            msg: "Something went wrong",
            error: error
        })
    }
})
app.post('/api/v1/content/', userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type;

    await ContentModel.create({
        link,
        type,
        //@ts-ignore-
        userId: req.userId,
        tags: []
    })

    res.json({
        msg: "content added"
    })

})
app.get('/api/v1/content/', userMiddleware, (req, res) => {

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