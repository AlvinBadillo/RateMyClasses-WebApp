const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const db = require('./db');

// Test route to check if the server is working
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log("http://localhost:3000/")
});