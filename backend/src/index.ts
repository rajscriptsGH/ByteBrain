import express from 'express'
import bcrypt from 'bcrypt'
const app = express()

const port = process.env.MONGODB_URL || 3300

app.use(express.json())


app.post('/api/v1/signup/', async (req, res) => {
    //use zod and hash password
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(403).json({
            msg: "Wrong credentials"
        })
    }

    //hash password
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(password, salt);




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

})

