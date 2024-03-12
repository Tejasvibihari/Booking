import bcrypt from 'bcrypt';
import Admin from '../models/admin.model.js';
import HotelData from '../models/hotelData.model.js';
import passport from '../passport.js';
import { sendAdminSignUpEmail } from './signUp.email.js';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

export const adminSignUp = async (req, res) => {
    const { firstName, lastName, email, password, companyName } = req.body;
    try {
        const validateAdmin = await Admin.findOne({ email: email });
        if (!validateAdmin) {
            try {
                const adminHashPassword = await bcrypt.hash(password, saltRounds);
                const createAdmin = new Admin({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: adminHashPassword,
                    companyName: companyName
                })
                await createAdmin.save()
                const { password: pass, ...rest } = createAdmin._doc;
                res.json(rest)
                await sendAdminSignUpEmail(firstName, lastName, companyName, email)

                console.log(rest);

            } catch (error) {
                res.json(error)
            }
        } else {
            res.json("Admin Already Exists")
        }
    } catch (error) {
        console.log(error)
    }
}


export const adminSignIn = function (req, res, next) {
    passport.authenticate('admin', async function (err, admin, info) {
        if (err) {
            return next(err);
        }
        if (!admin) {
            return res.status(401).json({ message: info.message });
        }
        req.logIn(admin, async function (err) {
            if (err) {
                return next(err);
            }
            const hotelData = await HotelData.find({ adminId: admin._id });
            // console.log(`Hello${hotelData}`);
            const token = jwt.sign({ id: admin._id, hotel: hotelData }, "ADMINHOTELBOOKING");
            const { password: pass, ...rest } = admin._doc;
            const hotel = hotelData;
            return res
                .cookie('access_token', token, { httpOnly: true })
                .status(200)
                .json({ rest, hotel, message: "Admin logged in successfully" });
        });
    })(req, res, next);
}