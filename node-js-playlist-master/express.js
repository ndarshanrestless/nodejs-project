
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/profile/:name', function(req, res){
  //res.send('This is the homepage damit! ')
  var data = {name:req.params.name , age:24,
    hobbies:['eating', 'sleeping', 'fucking']}
  res.render('profile', {data:data});
});


app.listen(3000)
