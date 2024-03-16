import express from 'express';
import mongoose from 'mongoose';
import userAuthRouter from './router/userAuth.route.js';
import adminAuthRouter from './router/adminAuth.route.js';
import hotelAddRouter from './router/addHotel.route.js';
import roomAddRouter from './router/addRoom.route.js';
import passport from './passport.js';
import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());


app.use(session({
    secret: 'BOOKINGSECRET',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/bookingDB', { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to Database successfully bookingDB")
    })
    .catch((err) => {
        console.log(`Error connecting to the database. \n${err}`);
    });


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.use('/api/auth', userAuthRouter);

app.use('/api/auth', adminAuthRouter);
app.use('/api/hotel', hotelAddRouter);

app.use('/api/hotel/', roomAddRouter);