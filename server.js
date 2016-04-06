var express = require('express');
var path = require('path');

var app = express();

console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname + '/bower_components')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public','views','main.html'));
});

app.get('/two', function (req, res) {
  res.sendFile(path.join(__dirname,'public','views','two.html'));
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
