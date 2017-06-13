
var express = require('express');

var app = express();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get(['/', '/profile'], function(req, res){
  var data = {name:"Darshan nagarajappa" , age:24,
    hobbies:['eating', 'sleeping', 'fucking']};
  res.render('profile', {data:data});
});

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact-sucess', {data: req.body})
});

app.get('/contact', function(req, res){
  //console.log(req.query)
  res.render('contact', {qs: req.query})
});


app.listen(3000)
