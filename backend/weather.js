const axios = require('axios');
require('dotenv').config();

async function getWeather(location) {
    const apiKey = process.env.API_KEY;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next14days?unitGroup=us&key=${apiKey}&include=days&elements=datetime,tempmax,tempmin`;
    try {
        const response = await axios.get(url);
        return averageTemp(response.data);
    } catch (error) {
        console.log(error);
    }
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
    return fToCel;
}

function averageTemp(data) {
    return data.days.map(day => {
        const averageTemp = (day.tempmax + day.tempmin) / 2;
        return {
            date: day.datetime,
            temp: Math.round(fToC(averageTemp))
        }
    })
}

const getWeatherData = async (req, res) => {
    const location = req.params.location;
    const data = await getWeather(location);
    res.send(data);
};

module.exports = {
    getWeatherData
};