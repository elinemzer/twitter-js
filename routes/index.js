//REQUIRING MODULES AND PACKAGES
const express = require('express');
const router = express.Router(); // could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

//ROUTING LOGIC

router.use(express.static('public'));

router.get('/stylesheets/style.css', function (req, res) {
  res.sendFile('stylesheets/style.css');
});

router.get('/', function (req, res) {
  var allTheTweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: allTheTweets, showForm: true } );
});

router.get('/users/:name', function(req, res, next) {
  var tweetsForName = tweetBank.find({name: req.params.name});
  res.render( 'index', {title: 'Twitter.js', tweets: tweetsForName, showForm: true, username: req.params.name});
});

router.get('/tweets/:id', function(req, res, next){
  var tweetID = tweetBank.find({id: Number(req.params.id)});
  res.render('index', {title: 'Twitter.js', tweets: tweetID})
});

router.post('/tweets', function(req, res, next){
  tweetBank.add(req.body.name, req.body.text); //this adds to tweetBank, but doesnt respond to client
  res.redirect('/'); //whenever a browser responds, it completely reloads the form. Então, need to redirect to a different location, the root.
})


module.exports = router;
