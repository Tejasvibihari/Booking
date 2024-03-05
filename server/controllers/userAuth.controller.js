import bcrypt from 'bcrypt';
import User from '../models/user.model.js';



const saltRounds = 10;

export const signUp = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({
            email: email,
            password: hashPassword
        })
        await newUser.save()
            .then(() => {
                res.json("Sign Up Completed")
            })
            .catch((err) => {
                res.json(`Something Went Wrong ${err}`)
            })
    } catch (error) {
        res.json(error)
    }
}

export const signIn = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const validEmail = await User.findOne({ email: email })
        if (validEmail) {
            try {
                const validPassword = await bcrypt.compare(password, validEmail.password)
                console.log(validPassword)
                if (validPassword) {
                    res.json("Sign In Success")
                } else {
                    res.json("Invalid Password")
                }
            } catch (error) {
                res.json("Invalid Password")
            }
        } else {
            res.json("User Not Found")
        }

    } catch (error) {
        res.json(error)
    }
}
