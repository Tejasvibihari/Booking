

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

export const sendAdminSignUpEmail = async (companyName, firstName, lastName, email) => {
    try {
        const info = await transporter.sendMail({
            from: '"Booking" <tejasvibihari2000@gmail.com>',
            to: email,
            subject: "Account created",
            html: `
                <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 4px;">
        <header style="text-align: center; margin-bottom: 20px;">
            <img src="https://leafinfotech.in/images/Leaf%20Logo.png" alt=${companyName} style="display: block; margin: 0 auto; width: 100px; height: auto;">
            <h1>Welcome to ${companyName} Seller Portal!</h1>
        </header>
        <div style="line-height: 1.5;">
            <p>Hi ${firstName},</p>
            <p>Congratulations! Your seller account for ${companyName} has been successfully created on the ${companyName} platform.</p>
            <p>Now you can manage your hotel listings, update room details, set rates and availability, and receive bookings directly through our platform.</p>
            <p>To get started, log in to your seller account at: <a href="#">Dashboard</a></p>
            <p>We're excited to have you join our growing network of hotels. If you have any questions or need assistance, please don't hesitate to contact our seller support team at tejasvibihari2000@gmail.com or 6205731150 .</p>
            <p>Happy Selling!</p>
            <p>The ${companyName} Team</p>
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
