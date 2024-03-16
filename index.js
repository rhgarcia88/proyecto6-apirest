require("dotenv").config(); //Se configura en linea 1
const express = require('express');
const { connectDB } = require('./src/config/db');

const app = express();
connectDB();

app.listen(3000, ()=> {
  console.log('http://localhost:3000');
});