import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ClosureAlert from './ClosureAlert';



const WeatherSalesForcast = ({city, SalesForcast}) => {
    const [weatherForcast, setWeatherForcast] = useState([]);
    const location = city === 'Munich' ? 'Munich, Germany' : 'Hamburg, Germany'




    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:5000/weather/${location}`,
            );
            setWeatherForcast(result.data);
            console.log(result.data);
        };
        fetchData();
    }, []);

    const data = SalesForcast.map(sales => {
        const weather = weatherForcast.find(weather => weather.date === sales.date.slice(0, 10));
        return {
          date: sales.date,
          temperature: weather ? weather.temp : null,
          sales: sales.forecasted_sales_quantity,
        };
      });


    return (
        <div >
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "30px", paddingBottom: "30px"}}>
                    <LineChart
                        width={1000}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis yAxisId="left" dataKey="sales" />
                        <YAxis yAxisId="right" orientation="right" dataKey="temperature" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#8884d8" />
                        <Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#82ca9d" />
                    </LineChart>
            </div>
            <div>
                <ClosureAlert city={city} weatherForcast={weatherForcast} SalesForcast={SalesForcast} />
            </div>
        </div>
      );
    };

export default WeatherSalesForcast