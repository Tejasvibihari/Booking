import mongoose from 'mongoose';
import { required } from 'nodemon/lib/config';


const hotelDataSchema = mongoose.Schema({
    hotelName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    geolocation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    hotelCategory: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: Email,
        required: true
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
});

const HotelData = mongoose.model('HotelData', hotelDataSchema);

export default HotelData;