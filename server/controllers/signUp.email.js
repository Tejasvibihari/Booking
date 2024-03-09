

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: "tejasvibihari2000@gmail.com",
        pass: "rrsuyzcvvxjhfhsq",
    },
});

export const sendSignUpEmail = async (email, firstName, lastName) => {
    try {
        const info = await transporter.sendMail({
            from: '"Booking 👻" <tejasvibihari2000@gmail.com>',
            to: email,
            subject: "SignUp Completed",
            html: `
                <div style="background-color: #f4f4f4; padding: 20px;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                        <div style="padding: 20px;">
                            <h2 style="color: #333;">Welcome to our Hotel Booking Website!</h2>
                            <p style="color: #555;">Dear ${firstName},</p>
                            <p style="color: #555;">Thank you for registering with us. Your account has been successfully created.</p>
                            <p style="color: #555;">Here are your registration details:</p>
                            <ul style="list-style-type: none; color: #555;">
                                <li>User Name: ${firstName} ${lastName}</li>
                                <li>Email Address: ${email}</li>
                            </ul>
                            <p style="color: #555;">You can now log in to our website to explore and book hotels at your convenience.</p>
                            <p style="color: #555;">If you have any questions or need assistance, feel free to contact us.</p>
                            <p style="color: #555;">Best regards,</p>
                            <p style="color: #555;"><a href="http://localhost:5173/signin">Hotel Booking Team.</a></p>
                        </div>
                    </div>
                </div>
            `
        });
        console.log(info);
    } catch (error) {
        console.log(error);
        throw error;
    }
};
