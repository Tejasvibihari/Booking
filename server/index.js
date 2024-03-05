import express from 'express';
import mongoose from 'mongoose';
import userAuthRouter from './router/userAuth.route.js';


const app = express();
app.use(express.json());


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