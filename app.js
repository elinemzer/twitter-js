
//REQUIRE MODULES & PACKAGES
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const volleyball = require('volleyball');
const routes = require('./routes');
const fs = require('fs');
const path = require('path')
const mime = require('mime');

//NUNJACK CONFIGURATION WITH HTML -- BOILERPLATE, JUST COPY AND PASTE IN
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

// manually writter static file middleware
// app.use(function(req, res, next){
//   var mimeType = mime.lookup(req.path); //mime has a lookup that checks the file extension and figures out the corresponding header content type
//   fs.readFile('./public' = req.path, function(err, fileBuffer){
//     if(err) return next() // 'there was no file at that path'
//     res.header('Content-Type', mimeType);
//     res.send(fileBuffer)
//   })
// })

//TYPICAL WAY TO USE STATIC MIDDLEWARE
app.use(express.static(__dirname + '/public'));

//HOW TO USE bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

//ANOTHER COMMON THING TO DO (FOR AJAX REQUESTS) DOESNT ACTUALLY DO ANYTHING HERE
app.use(bodyParser.json());

//WHAT DOES EXPRESS STATIC ACTUALLY DO?
//it looks in the folder you pass in (public) and will try to convert that uri into a relative
// file path. If it finds a resource that matches that, it will grab that and send back to the
// client.

//HTML ROUTING THROUGH ROUTES FOLDER
var PORT = 3000;
app.use('/', routes);

app.listen(PORT, function(){
    console.log('server listening');
  });














//PRACTICE
// app.listen(PORT, function(){
//     console.log('server listening');
//   });
//
// app.use('/', function(req, res, next){
//   console.log(req.url);
//   next();
// });
//
// app.use(volleyball);
//
// app.use('/special/', function (req, res, next) {
//     console.log('You reached the special area');
//     next();
// });
//
// app.get('/', function (req, res, next){
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// //  res.send('Welcome!');
// //  next();
// });
//
// app.get('/news', function (req, res, next){
//   res.send('Welcome News!');
// //  next();
// });
//
//   var locals =  {
//     title: 'An Example',
//     people: [
//       {name: 'Gandalf'},
//       {name: 'Frodo'},
//       {name: 'Hermione'}
//   ]
// };

// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output){
//   if (err) throw err;
//   console.log(output);
// })
