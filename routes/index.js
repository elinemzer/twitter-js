//REQUIRING MODULES AND PACKAGES
const express = require('express');
const router = express.Router(); // could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

//ROUTING LOGIC

router.use(express.static('public'));
router.get('/', function (req, res) {
//  console.log('hi?')
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', function (req, res) {
//  console.log('hello?');
  res.sendFile('stylesheets/style.css');
});

router.get('/users/:name', function(req, res, next) {
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  //console.log( list );
  // var tweets = {};
  // for (var i = 0; i < list.length; i++){
  //   tweets[i] = list[i];
  // }
  // console.log(tweets);
  res.render( 'index', {tweets: list});
});

router.get('/tweets/:id', function(req, res, next){
  var id = Number(req.params.id);
  var tweetID = tweetBank.find({id: id});
  res.render('index', {tweets: tweetID})
})


module.exports = router;
