const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const router = express.Router();


// Post
//  api/contact/send
router.post('/send', (req, res) => {
  const output = `
 <p>You have a new contact rewuest</p>
 <h3>Contact Details</h3>
 <ul>
   <li>Name: ${req.body.Name}</li>
   <li>Sunject: ${req.body.Subject}</li>
   <li>Email: ${req.body.Email}</li>
   <li>Phone: ${req.body.Phone}</li>
 </ul>
 <h3>Message</h3>
 <p>${req.body.Message}</p>
 `;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // generated ethereal user

      pass: process.env.PASSWORD, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: 'shohedulislamemon@gmail.com', // sender address
    to: 'shohedul350@gmail.com', // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return res.status(201).json({ msg: 'Email has been sent' });
  });
});

module.exports = router;
