const express = require( 'express' );
const app = express(); // creates an instance of an express application
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const volleyball = require('volleyball');
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates


const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use('/', function(req, res, next){
  console.log(req.url);
  next();
});

app.use(volleyball);

app.use('/special/', function (req, res, next) {
    console.log('You reached the special area');
    next();
});

app.get('/', function (req, res, next){
  res.render( 'index', {title: 'Hall of Fame', people: people} );
//  res.send('Welcome!');
//  next();
});

app.get('/news', function (req, res, next){
  res.send('Welcome News!');
//  next();
});


var PORT = 3000;

  app.listen(PORT, function(){
    console.log('server listening');
  });

//   var locals =  {
//     title: 'An Example',
//     people: [
//       {name: 'Gandalf'},
//       {name: 'Frodo'},
//       {name: 'Hermione'}
//   ]
// };

// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output){
//   if (err) throw err;
//   console.log(output);
// })
