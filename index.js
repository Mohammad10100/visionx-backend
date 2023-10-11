const express = require('express');
const cors = require('cors')

require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use(cors())

// import api routes 
const userRoutes = require("./routes/User");
const rankRoutes = require("./routes/Rank");
// mount api routes 
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/rank", rankRoutes);

app.listen(PORT,()=>{
    console.log(`server started successfully on port ${PORT}`);
})


const dbConnect = require('./config/database')
dbConnect();

app.get('/', (req, res)=>{
    res.send('<h1>Vision X - Backend</h1>')
})

