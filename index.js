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

// app.listen(PORT,()=>{
//     console.log(`server started successfully on port ${PORT}`);
// })


const dbConnect = require('./config/database')
dbConnect();

app.get('/', (req, res)=>{
    res.send('<h1>Vision X - Backend</h1>')
})



const httpServer = require('http').createServer(app);
const Room = require('./models/roomModel')

// Socket 
const serverSocket = require('./controllers/socket');
const SocketRoom = require('./controllers/room'); 
const rooms = new SocketRoom(); 
serverSocket(httpServer, rooms); 
// Socket


httpServer.listen(PORT, () => {
  console.log('http Server Listening to PORT: ' + PORT);
});

// socket api
app.get('/api/room/:roomId', async (req, res) => {
    try {
      const roomId = req.params.roomId;
      const room = await Room.findOne({ name: roomId });
      if (!room) {
        return res.status(404).json({ message: 'Room not found.' });
      }
      res.json({ room });
    } catch (error) {
      console.error('Error getting room information:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });