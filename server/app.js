const express = require("express");

const app = express();
const { API_VERSION } = require("./config");

// Load routings
const userRoutes = require("./routes/user");

app.use(express.json()); // Understanding of json format in backend server

// Router basic
app.use(`/api/${API_VERSION}`, userRoutes);



module.exports = app;
