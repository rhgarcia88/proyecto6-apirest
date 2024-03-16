require("dotenv").config(); //Se configura en linea 1
const express = require('express');
const { connectDB } = require('./src/config/db');
const  router = require('./src/api/routes/Streamer');

const app = express();
connectDB();
app.use(express.json()); //configurar server para recibir datos tipo json

app.use("/api/v1/streamers",router);

app.use("*",  (req,res,next) => {
  return res.status(404).json("Route not found");
 });

app.listen(3000, ()=> {
  console.log('http://localhost:3000');
});