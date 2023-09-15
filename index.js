const express = require('express');

require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())

// import api routes 

// mount api routes 


app.listen(PORT,()=>{
    console.log(`server started successfully on port ${PORT}`);
})


const dbConnect = require('./config/database')
dbConnect();

app.get('/', (req, res)=>{
    res.send('<h1>Vision X - Backend</h1>')
})

