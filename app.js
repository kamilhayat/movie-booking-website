const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
dotenv.config();


const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
PORT= 5000
// middleware section
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingRouter);

const DB="mongodb+srv://kamil:12345@cluster0.ztsqqzu.mongodb.net/movies?retryWrites=true&w=majority"

mongoose.connect(DB).then(()=>{
    console.log("Database Connected FRST")
  }).catch((err)=>
    console.error(`Error in connecting to database`));

app.listen(PORT, () => {
    console.log(`Database connected.`);
})