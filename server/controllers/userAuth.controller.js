import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import passport from '../passport.js';



const saltRounds = 10;

export const signUp = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    // console.log(req.body)
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
        } catch (error) {
            res.json(error)
        }
    } else {
        res.json("User Already Exists")
    }
}


export const signIn = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(400).json({ message: info.message });
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
