const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const { MongoClient } = require('mongodb');
const app = express();

const port =5000;
const URL="mongodb+srv://dtanwer:Deepak123@hotelapp.17xqxuk.mongodb.net/?retryWrites=true&w=majority"
const dbName = 'test';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');  
  next();
});

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to the database!');

})
.catch((error) => {
    console.error('Error connecting to the database:', error);
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  datein: { type: String, required: true },
  dateout: { type: Date, required: true },
  number: { type: Number, required: true },
  type: { type: String, required: true }
});
const roomSchema = new mongoose.Schema({
  room: { type: Number, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true }
});

const Room=mongoose.model('Room',roomSchema);
const Booking=mongoose.model('Booking',bookingSchema);

app.get("/bookings", async (req, res) => {
  try {
    const rooms = await Booking.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/rooms", async (req, res) => {
  try {
    const rooms = await Room.find({booked:true});
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



app.post('/save', (req, res) => {
  const data=req.body;
  console.log(data);
  const d={
    "type":data.type,
    "room":data.number,
    "price":5*data.number
  }
  console.log(d);
  const  newBooking= new Booking(data);
  const  newRoom= new Room(d);
  newBooking.save().then(()=>{
    console.log(" Booking Done")
  }).catch((err)=>{
    console.log("Not saved");
  })

  // newRoom.save().then(()=>{
  //   console.log(" Room saved")
  // }).catch((err)=>{
  //   console.log("Not saved");
  // })
  
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
  