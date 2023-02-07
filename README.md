# OneGlass.io Forcast

This project is a web application that provides the client with a forcast of sales.

## Frontend

The frontend of the project is built using React and other simple react library. It provides an interface for the user to view the forecast of dates on which the store should be closed.

### How to run the frontend

1.  Clone the project repository.
2.  In the terminal, navigate to the `frontend` directory.
3.  Run `npm install` to install all required dependencies.
4.  Run `npm start` to start the development server.
5.  Open the browser and go to `http://localhost:3000/` to view the application.

## Backend

The backend of the project is built with Node.js and Express, and uses a database to store the weather forecast and sales forecast data.

### How to run the backend

1.  Clone the project repository.
2.  In the terminal, navigate to the `backend` directory.
3.  Run `npm install` to install all required dependencies.
4.  Create a `.env` file in the backend directory.
5.  In the `.env` file, add the following:


 

       SCHEMA_NAME=
    TABLE_NAME_FORECASTS=
    DB_USER=
    DB_PASSWORD=
    DB_HOST=
    DB_NAME=
    DB_PORT=
    API_KEY=

 

6.  Run `npm start` to start the Express server.
7.  The backend server will be running on `http://localhost:5000/`.

## Note

This project is for demonstration purposes only and is not intended for commercial use. The data used for weather forecast and sales forecast is dummy data and should not be used for any real-world applications.