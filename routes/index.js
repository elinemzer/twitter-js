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

module.exports = router;
