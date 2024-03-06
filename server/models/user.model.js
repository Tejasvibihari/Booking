import mongoose from 'mongoose';
// import { required } from 'nodemon/lib/config';

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ''
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

export default User;