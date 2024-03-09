import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import passport from '../passport.js';
import { sendSignUpEmail } from './signUp.email.js';



const saltRounds = 10;


export const signUp = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const userCheck = await User.findOne({ email: email })
    if (!userCheck) {
        try {
            const hashPassword = await bcrypt.hash(password, saltRounds);
            const newUser = new User({
                email: email,
                password: hashPassword,
                firstName: firstName,
                lastName: lastName,
            })
            await newUser.save()
            res.json("User Created")

            await sendSignUpEmail(email, firstName, lastName);

        } catch (error) {
            res.json(error)
        }
    } else {
        res.json("User Already Exists")
    }
}


export const signIn = (req, res, next) => {
    passport.authenticate('user', (err, user, info) => {
        if (!user) {
            return res.status(401).json({ message: "Incorrect Email or Password" });
        }
        if (err) {
            return next(err);
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            // Send user data
            return res.json({ message: "Sign In Successfully" });
        });
    })(req, res, next);
};
