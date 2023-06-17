const cors = require('cors');
const express = require('express');
const app = express();

// middilewares 

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use('/');

module.exports = app;