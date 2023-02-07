import React, { useState } from "react";

const ClosureAlert = ({ weatherForcast, SalesForcast }) => {
  const [alert, setAlert] = useState(null);

  const closedDates = (weatherForcast, salesForcast) => {
    let closedDates = [];
    let tempClosed = 0;
    let salesClosed = 0;
    for (let i = 0; i < weatherForcast.length; i++) {
      let date = weatherForcast[i].date;
      let temp = weatherForcast[i].temp;
      let sales = 0;

      for (let j = 0; j < salesForcast.length; j++) {
        if (salesForcast[j].date === date) {
          sales = salesForcast[j].forecasted_sales_quantity;
          break;
        }
      }

      if (temp < 5) {
        tempClosed++;
      } else {
        tempClosed = 0;
      }

      if (sales < 1000) {
        salesClosed++;
      } else {
        salesClosed = 0;
      }

      if (tempClosed === 3 && salesClosed === 3) {
        closedDates.push(date);
        tempClosed = 0;
        salesClosed = 0;
      } else if (tempClosed === 3 && sales > 1500) {
        tempClosed = 0;
      } else if (salesClosed === 3) {
        closedDates.push(date);
        salesClosed = 0;
      }
    }

    console.log(closedDates);
    return closedDates;
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#00bfff",
          color: "#fff",
          borderRadius: "5px",
          margin: "20px 0",
        }}
        onClick={() => setAlert(closedDates(weatherForcast, SalesForcast))}
      >
        Get Closure Dates
      </button>
      {alert && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#e6e6e6",
            borderRadius: "5px",
          }}
        >
          <p>Closed dates:</p>
          <ul style={{ listStyle: "none" }}>
            {alert.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClosureAlert;
