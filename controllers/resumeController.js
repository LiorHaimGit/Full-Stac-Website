const emailSender = require('../utils/email');

exports.submitResume = (req, res) => {
    const email = req.body.email;

    const message = "Resume request";    
    const reply = "The resume file will be sent to the provided email address shortly.";
    const name = "";
    emailSender.sendEmail(name ,email, message);
    res.render('submit', { name: name, reply: reply });
};
