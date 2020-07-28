var express = require('express');
var app = express();
app.use(express.static('.')); // myApp will be the same folder name.
app.all('/', function (req, res,next) {
 res.redirect('/'); 
});
app.listen(4000, 'localhost');
console.log("MyProject Server is Listening on port 4000");