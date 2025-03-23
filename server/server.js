const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

const app = express();
app.use(express.json());  // To parse JSON request body
app.use(cors());  // Enable CORS to allow requests from the frontend

// Configure Nodemailer transport using Gmail (or another email service)
const transporter = nodemailer.createTransport({
  service: 'gmail',  // You can change this to another email service provider if needed
  auth: {
    user: process.env.EMAIL_USER,  // Use the email from your .env file
    pass: process.env.EMAIL_PASS,  // Use the password from your .env file
  },
});

// Route to handle form submissions (POST request)
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Your email (sender) from the .env file
    to: process.env.RECIPIENT_EMAIL,  // The recipient email (you) from the .env file
    subject: 'New Contact Form Submission',
    text: `
      You have a new contact form submission:

      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    replyTo: email,  // Add this line so that replies are sent to the user's email address
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email: ' + error);
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Start the server on port 5000 (or any other port you prefer)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});