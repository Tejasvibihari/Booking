import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import passport from '../passport.js';



const saltRounds = 10;

export const signUp = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    console.log(req.body)
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
}

// export const signIn = async (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     try {
//         const validEmail = await User.findOne({ email: email })
//         if (validEmail) {
//             try {
//                 const validPassword = await bcrypt.compare(password, validEmail.password)
//                 console.log(validPassword)
//                 if (validPassword) {
//                     res.json("Sign In Success")
//                 } else {
//                     res.json("Invalid Password")
//                 }
//             } catch (error) {
//                 res.json("Invalid Password")
//             }
//         } else {
//             res.json("User Not Found")
//         }

//     } catch (error) {
//         res.json(error)
//     }
// }

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
            return res.json({ user: user, message: "Sign In Successfully" });
        });
    })(req, res, next);
};

// export const signIn = passport.authenticate('local', {
//     successRedirect: 'http://localhost:5173/',
//     failureRedirect: 'http://localhost:5173/signin',
// });