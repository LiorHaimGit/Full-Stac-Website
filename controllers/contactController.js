const emailSender = require('../utils/email');

exports.submitContact = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Send the confirmation email
    emailSender.sendEmail(name, email, message);
    const reply = "Your message has been received. We'll get back to you soon.";
    res.render('submit', { name: name, reply: reply });
};
