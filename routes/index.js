
  var express = require('express');
  var  router = express.Router();
  var    wins = 0;
  var  losses = 0;

  var randomIntInc = function ( low, high ) {
    return Math.floor( Math.random() * (high - low + 1) + low );
  }

  router.get('/stats', function( req, res ) {
    var result = { wins : wins, losses : losses };
    res.json( result );
  });

  router.post('/flip', function( req, res ) {

    var    call = req.body.call;
    var   heads = 0;
    var   tails = 1;
    var    flip = randomIntInc( 0, 1 );
    var outcome = ( flip == 0 ? "heads" : "tails" );
    var contest = ( outcome == call ? "win" : "loss" );

    if ( contest == "win" ) wins++;
    if ( contest == "loss" ) losses++;

    var  result = { result : contest };
    res.json( result );
  });

  module.exports = router;
