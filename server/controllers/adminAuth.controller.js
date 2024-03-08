import bcrypt from 'bcrypt';
import Admin from '../models/admin.model.js';

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
                res.json("Admin Created")
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
