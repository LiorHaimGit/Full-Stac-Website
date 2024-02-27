
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'myemail@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

exports.sendEmail = (name, email, message) => {
    let mailOptions = {
      from: 'myemail@gmail.com',
      to: 'myemail@gmail.com',
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission from ${name} (${email}). Here is the message:\n\n${message}`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
};