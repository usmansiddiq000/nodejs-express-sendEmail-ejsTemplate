var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var fs = require('fs');
var ejs = require('ejs');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: '*********',
         pass: '*******'
     }
 });
// var transporter = nodemailer.createTransport({
//    host: 'smtp.zoho.com',
//     port: 465,
//     secure: true, //ssl
//     auth: {
//             user:'**************',
//             pass:'*******'
//     }
//  });




/* GET home page. */
router.get('/email', function(req, res, next) {
var template = ejs.compile(fs.readFileSync(__dirname + "/email.html", 'utf8'))
var user = {
 name:"yourname"
}
var html = template({user:user});
console.log(html)
const mailOptions = {
  from: '************', // sender address
  to: '************', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: html// plain text body
};
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
  res.render('index', { title: 'Email send Please check your Email' });
});

module.exports = router;
