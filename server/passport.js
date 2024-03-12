// passport.js
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import User from './models/user.model.js';
import Admin from './models/admin.model.js';



passport.use('user', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    } catch (error) {
        return done(error);
    }
}
));

passport.use('admin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const admin = await Admin.findOne({ email: email });
        if (!admin) {
            return done(null, false, { message: 'Incorrect email.' });
        }
        const isValidPassword = await bcrypt.compare(password, admin.password);
        if (!isValidPassword) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, admin);
    } catch (error) {
        return done(error);
    }
}
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

passport.serializeUser((admin, done) => {
    done(null, admin.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const admin = await Admin.findById(id);
        done(null, admin);
    } catch (error) {
        done(error);
    }
});

// const datta = {

//     "adminId": "65efcf3ef3dcc116f6755322",
//     "hotelName": "Bihari Hotel",
//     "address": "jsdbgjdsbg",
//     "city": "Jaipur",
//     "state": "Rajasthan",
//     "zip": "302017",
//     "geolocation": "dftgyhjnkml",
//     "description": "edrtfghyuj",
//     "hotelCategory": "Budget",
//     "basePrice": "7000",
//     "mobile": "6205731150",
//     "amenities": {
//         "swimmingPool": true,
//         "gym": false,
//         "restaurant": true,
//         "spa": false,
//         "parking": true
//     }
// }

export default passport;
