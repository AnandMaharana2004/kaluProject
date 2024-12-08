import express from "express"
const app = express()
import path from "path"
import "ejs"
app.set("view engine", "ejs")
import { fileURLToPath } from "url";
import nodemailer from "nodemailer"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider (e.g., Gmail, Yahoo, etc.)
    auth: {
        user: 'anandmaharana427@gmail.com', // Your email address
        pass: 'gcqf uldd eydw hhsk', // Your email password or app-specific password
    },
});

app.get('/', (req, res) => {
    res.render("index")
})
app.get('/conform-now', (req, res) => {
    res.render('conform-now')
})
app.get('/earning-disclamer', (req, res) => {
    res.render('earning-disclamer')
})
app.get('/otp-in-page', (req, res) => {
    res.render('otp-in-page')
})
app.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy')
})
app.get('/terms-services', (req, res) => {
    res.render('terms-services')
})

app.post('/sendEmail', async (req, res) => {
    // cheak the email is empy or not 
    // the email is properly structue or not
    // the email is valid or not
    // send email to the use to sure that the user's email store in the owners

    const { email } = req.body;
    if (!email) res.send("email is require")
    const message = "some one enter their email on your page"
    const mailOptions = {
        from: email, // Sender email (user input)
        to: 'anandmaharana427@gmail.com', // Website owner's email
        subject: 'Contact Form Submission',
        text: `Email: ${email}\n\nMessage:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send(`Email sent successfully to ${email}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Failed to send email');
    }
})
app.listen('3000')

export default app