var Email = require('email-templates');
var path = require('path');
var nodemailer = require('nodemailer');
var shortid = require('shortid');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {
         user: 'teamiste@gmail.com',
         pass: 'doobaramatpuchna'
     }
});
//Email Template
const email = new Email({
  message: {
    from: 'Team ISTE'
  },
  // uncomment below to send emails in development/test env:
  send: true,
  preview: false,
  transport: transporter
});
var is = shortid.generate();
email.send({
  template: path.join(__dirname,'emails','user'),
  message: {
  to: 'parthpant4@gmail.com'
  },
  locals: {
  name: 'Parth',
  id: is
  }
}).then(()=>console.log("email sent"))
.catch(err=>console.log(err));