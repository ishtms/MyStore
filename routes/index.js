var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/send-mail', function(req,res,next){
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "codemode.co@gmail.com", // generated ethereal user
        pass: "390775866"  // generated ethereal password
    },
    tls:{
        rejectUnauthorized: false
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"CodeMode 👻" <codemode.co@gmail.com>', // sender address
    to: 'codemode.co@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    html: '<b>👻👻👻👻👻👻👻👻👻Hello world?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.send("MSG SENT")

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});
res.send("DONEEEEE")
})

router.get('/company', function(req, res, next) {
  
  res.render('company');
});

router.get('/payment', function(req, res, next) {
  res.render('payment');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/shopping', function(req, res, next) {
  res.render('shopping');
});

router.get('/login', function(req,res,next){
  res.render('login')
})


module.exports = router;
