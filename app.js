const express = require( 'express' );
const app = express(); // creates an instance of an express application
// const bodyParser = require('body-parser');
// app.use(function (req, res, next) {
//     console.log('Request: ' + req);
//     console.log('Route? ' + req.params);
//     next();
// })
const volleyball = require('volleyball')

app.use(volleyball)

app.use('/special/', function (req, res, next) {
    console.log('You reached the special area');
    next();
});

app.get('/', function (req, res, next){
  res.send('Welcome!');
  next();
});

app.get('/news', function (req, res, next){
  res.send('Welcome News!');
  next();
});




var PORT = 3000;

  app.listen(PORT, function(){
    console.log('server listening');
  });
