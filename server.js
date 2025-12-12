const express = require("express");
const multer = require("multer");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors({
  origin: "https://frontendd-git-main-madhu14311s-projects.vercel.app/"
}));
app.use(express.json());

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });


app.post("/formData", upload.single("file"), async (req, res) => {
  try {
    const { name, email, phone, job, message } = req.body;
    const file = req.file;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "blissmadhu123@gmail.com",
        pass: "xmrgkjmhrihdunhg",    
      },
    });

    await transporter.sendMail({
      from: email,
      to: "blissmadhu123@gmail.com", 
      subject: `Job Application - ${job}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Job Position: ${job}
Message: ${message}
      `,
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
    });

    res.status(200).json({ message: "Application submitted successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// ----------------- CONTACT FORM -----------------
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

 
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "blissmadhu123@gmail.com",
        pass: "xmrgkjmhrihdunhg",   
      },
    });

    await transporter.sendMail({
      from: email,
      to: "blissmadhu123@gmail.com",
      subject: "New Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});


