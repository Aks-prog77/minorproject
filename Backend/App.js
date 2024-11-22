import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import './Config/dbConn.js'; // Import the database connection
import adminRoute from './routes/adminRoute.js'; // Assuming this exists for '/api/admin'
import User from './Config/User.js';
import Contact from './Config/Contact.js';

const app = express();
const port = 3000;

app.use("/api/admin", adminRoute);
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'accesszone79@gmail.com',
        pass: 'ftmy tvdc ehzg qyfs', // Use environment variables in production
    }
});

const JWT_SECRET = "accesszonekey123"; // Use environment variables in production


app.post('/signup', async (req, res) => {
    console.log('Signup route triggered');
    console.log('Request body:', req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        console.log('Existing user:', existingUser);

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists. Please sign in.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed password:', hashedPassword);

        const newUser = new User({ name, email, password: hashedPassword });
        const savedUser = await newUser.save();

        console.log('Saved user:', savedUser);
        res.status(201).json({ message: 'User created successfully', user: { name: savedUser.name, email: savedUser.email } });
    } catch (error) {
        console.log(chalk.inverse.red('Error saving user:', error));
        res.status(500).json({ message: 'Error saving user data' });
    }
});


// Login API
app.post('/login', async (req, res) => {
    console.log(`Welcome`)
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found. Please register first.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        res.status(200).json({ message: 'Login successful', user: { id: user._id, email: user.email } });
    } catch (error) {
        console.error(chalk.inverse.red('Error during login:', error));
        res.status(500).json({ message: 'An error occurred during login. Please try again later.' });
    }
});

// Contact Us API
app.post('/contact', async (req, res) => {
    try {
        const { fullname, email, phone, message } = req.body;

        if (!fullname || !fullname.firstname || !fullname.lastname) {
            return res.status(400).json({ alert: 'Fullname is required with both firstname and lastname.' });
        }

        const { firstname, lastname } = fullname;

        const newContact = new Contact({
            fullname: { firstname, lastname },
            email,
            phone,
            message,
        });

        await newContact.save();

        const mailOptions = {
            from: 'accesszone79@gmail.com',
            to: email,
            subject: 'Welcome to Access Zone',
            text: `Dear ${firstname} ${lastname},\n\nThank you for getting in touch with us. We appreciate your effort and look forward to helping those in need.\n\nBest regards,\nAccess Zone Team`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(chalk.red('Error sending email:', error));
                return res.status(500).json({ alert: 'Data saved, but an error occurred while sending email.' });
            }
            console.log('Email sent:', info.response);
            res.status(201).json({ alert: 'Contact form data saved and email sent successfully' });
        });
    } catch (error) {
        console.log(chalk.inverse.red('Error saving contact form data:', error));
        res.status(500).json({ alert: 'Error occurred while saving data' });
    }
});

// Forget Password API
app.post('/forget-password', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User with this email does not exist' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '15m' });
        const resetLink = `http://localhost:3000/reset-password?token=${token}`;

        const mailOptions = {
            from: 'accesszone79@gmail.com',
            to: email,
            subject: 'Password Reset Request',
            text: `You requested a password reset. Click the link below to reset your password:\n\n${resetLink}\n\nThis link will expire in 15 minutes.`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(chalk.red('Error sending password reset email:', error));
                return res.status(500).json({ message: 'Error occurred while sending the reset email' });
            }

            console.log('Password reset email sent:', info.response);
            res.status(200).json({ message: 'Password reset email sent successfully' });
        });
    } catch (error) {
        console.log(chalk.inverse.red('Error during password reset request:', error));
        res.status(500).json({ message: 'An error occurred during the password reset request' });
    }
});

// Reset Password API
app.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ message: 'Invalid or expired token' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        console.log(chalk.inverse.red('Error during password reset:', error));
        res.status(500).json({ message: 'Invalid or expired token' });
    }
});

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.inverse.red(err));
    } else {
        console.log(chalk.inverse.green(`Server is running on port ${port}`));
    }
});
