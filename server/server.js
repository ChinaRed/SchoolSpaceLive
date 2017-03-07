var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();
//https://codeforgeek.com/2014/07/send-e-mail-node-js/

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + './public/'));


//SMTP Config
var smtpTransport = nodemailer.createTransport({
  //Godaddy >.< 
  service: "Godaddy",
  auth: {
    user: 'jtorneros@schoolvenues.com',
    pass: process.env.PASS
  }

  //Gmail
  // service: "Gmail",
  // auth: {
  //   user: '',
  //   pass: ''
  // }
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// var livereload = require('connect-livereload');
// var livereloadport = 23456;
//live reload
// app.use(livereload({port:livereloadport}));

app.get('/', function (req, res, next) {
  res.send('Oh Hello there');
});

app.get('/send', function (req, res, next) {
  var name = req.query.name;
  var phone = req.query.phone;
  var email = req.query.email;
  var message = req.query.message;


  var mailOptions = {
    from: email,
    //note: email to must be name the same serivce/domain as stated above.
    to: ['jtorneros@schoolvenues.com', 'jtan@schoolvenues.com'],
    subject: name + ' wants info on School Venues',
    text: 'Requesting info ' + ' ' + name + ' ' + phone + ' ' + email + ' ' + message + ' ',
    html:'<b>'+ name + '</b> Would like more information about School Venues. <br/><b>Contact Info:</b> ' + ' phone: ' + phone + ' email: ' + email + ' message: ' + message
  };
  console.log('mailOptions',mailOptions);

  smtpTransport.sendMail(mailOptions, function  (err, info) {
    if (err){
      console.log('error',err);
      res.end('error');
    }else{
      console.log('Message sent:', info.response);
      res.end('sent');
    }
  });
});

var server = app.listen((process.env.PORT || 3000), function () {
  var host = server.address().address;
  var port = server.address().port;
});