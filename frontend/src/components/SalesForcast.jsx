import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import WeatherSalesForcast from './WeatherSalesForcast';





const SalesForcast = ({city}) => {
    const [data, setData] = useState([]);


    function cleanData(data) {
        return data.map(item => {
            return {
                date: item.date.slice(0, 10),
                forecasted_sales_quantity: Math.ceil(item.forecasted_sales_quantity),
                id: item.id
            };
        });
    }

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `http://localhost:3000/forecasts/${city}`,
          );
          setData(cleanData(result.data));
          console.log(cleanData(result.data));
        };
        fetchData();
      }, []);


  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Sales Forecast',
        data: data.map(item => item.forecasted_sales_quantity),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "30px", paddingBottom: "30px"}}>
              <LineChart
                width={1000}
                height={300}
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="forecasted_sales_quantity" stroke="#8884d8" />
              </LineChart>
      </div>
      <div>
        <WeatherSalesForcast city={city} SalesForcast={data} />
      </div>
    </div>
  );
};

export default SalesForcast