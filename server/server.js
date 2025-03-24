const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config({ path: '../.env' });  // Correct path if .env is in the root folder


const app = express();
app.use(express.json());  // To parse JSON request body
app.use(cors());  // Enable CORS to allow requests from the frontend

// Ensure environment variables are loaded correctly
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECIPIENT_EMAIL) {
  console.error("Missing environment variables. Check your .env file.");
  process.exit(1);  // Exit the process if required env variables are missing
}

// Configure Nodemailer transport using Gmail (or another email service)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Use the email from your .env file
    pass: process.env.EMAIL_PASS,  // Use the password from your .env file
  },
});

// Route to handle form submissions (POST request)
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

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
      replyTo: email,  // Allows direct replies to the sender
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully", response: info.response });

  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

// Start the server on port 5000 (or any other port you prefer)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
