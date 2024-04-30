var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'niharikaponnambath123@gmail.com',
    pass: 'vshk ivhq ztzk umgc'
  }
});

var mailOptions = {
  from: 'niharikaponnambath123@gmail.com',
  to: 'niharikaponnambath58@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'hello !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});