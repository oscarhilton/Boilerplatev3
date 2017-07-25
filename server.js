var express = require("express");
var mongoose    = require("mongoose");

var app = express();


//Connect to DB
mongoose.connect("mongodb://"+process.env.IP+":27017");
var db = mongoose.connection;
db.once('open', function() {
  console.log("connected to mongoDB!");
});

app.use(function(req, res, next){
   if (req.headers['x-forwarded-proto'] === 'https'){
       res.redirect('http://' + req.hostname + req.url);
   } else {
       next();
   }
});

app.use(express.static('public'));

app.listen(process.env.PORT, function(){
    console.log('Express server is up on ' + process.env.PORT);
})