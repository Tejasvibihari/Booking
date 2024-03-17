import mongoose from 'mongoose';

const roomDataModel = new mongoose.Schema({
    roomType: {
        type: String,
        required: true
    },
    amenities: {
        swimmingPool: {
            type: Boolean,
            default: false
        },
        wifi: {
            type: Boolean,
            default: false
        },
        ac: {
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
        tv: {
            type: Boolean,
            default: false
        },
    },
    acPrice: {
        type: Number,
        required: true
    },
    poolPrice: {
        type: Number,
        required: true
    },
    roomImage: {
        type: String,
        required: true
    },
    hotelId: {
        type: String,
        required: true

    }
});

const RoomData = mongoose.model('RoomData', roomDataModel);

export default RoomData;