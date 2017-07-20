var express = require("express");

var app = express()

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