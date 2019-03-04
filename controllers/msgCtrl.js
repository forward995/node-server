const nodemailer = require("nodemailer")
const config = require('../config/config')

const send = (req, res) => {
    
    const options = {
        // pool: true,
        host: "smtp.mailtrap.io",
        port: 2525,
        // secure: true, // use TLS
        auth: {
            user: config.email,
            pass: config.password
        }
    }

    const transporter = nodemailer.createTransport(options)
    
    transporter.sendMail({
        from: '',
        to: req.body.msg,
        subject: 'Message',
        text: 'I hope this message gets delivered!'
    }, (err, info) => {
       if(err)
            console.log(err)
        else
            console.log(info)
            res.json({
                message: "Email successfully sent."
            });
    });
}

module.exports = {
    send
}