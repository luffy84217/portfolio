const nodemailer = require('nodemailer');

module.exports = function mailHandler(req, res, next) {
    
    const user = process.env.ACCOUNT_USERNAME;
    const pass = process.env.ACCOUNT_PASSWORD;
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: user,
            pass: pass
        }
    });

    // setup email data with unicode symbols
    const mailOptions = {
        from: req.body.email + ' <' + user + '>', // sender address
        to: user, // list of receivers
        subject: 'Hello I am ' + req.body.name + '.', // Subject line
        text: req.body.message, // plain text body
        html: '<p>' + req.body.message + '</p>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json({ success: false });
            return console.error(new Error("Error may be caused by Gmail security issue or forgetting create .env file."));
        }
        // end req-res cycle
        res.status(200).json({ success: true });
    });
};
