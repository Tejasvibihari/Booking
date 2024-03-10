import mongoose from 'mongoose';



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
    basePrice: {
        type: Number,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    amenities: {
        swimmingPool: {
            type: Boolean,
            default: false
        },
        gym: {
            type: Boolean,
            default: false
        },
        restaurant: {
            type: Boolean,
            default: false
        },
        spa: {
            type: Boolean,
            default: false
        },
        parking: {
            type: Boolean,
            default: false
        },
    },
    adminId: {
        type: String,
        required: true
    }
});

const HotelData = mongoose.model('HotelData', hotelDataSchema);

export default HotelData;