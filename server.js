var path = require('path');
var express = require('express');

var app = express();

app.get('/two/bundle.js', function(req,res){
  res.sendFile(path.join(__dirname, 'dist', 'bundle', 'bundle.js'));
})

app.get('/public/*', function(req,res){
  res.sendFile(path.join(__dirname, 'dist', 'public', req.params[0]));
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
 
