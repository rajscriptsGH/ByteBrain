import express from 'express'
const app = express()

const port = process.env.MONGODB_URL || 3300

app.use(express.json())

app.post('/api/v1/signup/', (req, res) => {
    const { username, password } = req.body;
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

