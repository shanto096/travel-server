const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const travelData = require('./travel.json')
const hotelData = require('./hotelData.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/travel', (req, res) => {
    res.send(travelData)
})
app.get('/travel/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const newId = travelData.find(d => parseInt(d.id) === id)
    res.send(newId)
})
app.get('/hotel', (req, res) => {
    res.send(hotelData)
})
app.get('/hotel/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const newId = hotelData.find(d => parseInt(d.id) === id)
    res.send(newId)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})