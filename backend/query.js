const Pool = require('pg').Pool
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    schema_name: process.env.SCHEMA_NAME,
    table_name_forecasts: process.env.TABLE_NAME_FORECASTS,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

const getForecasts = (request, response) => {
    const city = request.params.city;
    pool.query(`
        SELECT * 
        FROM forecasts 
        WHERE location = $1 
            AND date >= NOW()::date + interval '1 day' 
            AND date <= NOW()::date + interval '14 days'
        ORDER BY location, date`, 
        [city],
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getForecasts,
}
