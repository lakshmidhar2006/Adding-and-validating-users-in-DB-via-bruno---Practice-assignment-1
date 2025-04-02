const express = require('express');
const { resolve } = require('path');
const mongoose=require("mongoose");
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require("./Schema");

dotenv.config();
const app=express();
app.use(express.json());
const port = 3000;
const MONGO_URI = process.env.MONGO_URI;

const db = async()=>{await mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
        
    })
    .catch(err => {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    });}
    db();


app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
const router = require("./Routes")
app.use(router)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
