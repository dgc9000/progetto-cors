import express from 'express'

const app = express()
const port = 8080

app.use(express.json())

app.get('/welcome', (request, response) => {
    response.status(200).send('Benvenuto in quest\'app Express')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})