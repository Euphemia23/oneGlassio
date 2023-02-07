const express = require('express')
const bodyParser = require('body-parser')

var cors = require('cors')
const app = express()

app.use(cors())

const db = require('./query')
const weather = require('./weather')

const port = 5000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({
        info: 'One Glass Backend API'
    })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

app.get('/forecasts/:city', db.getForecasts)
app.get('/weather/:location', weather.getWeatherData)