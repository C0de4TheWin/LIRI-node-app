
require("dotenv").config();

var argOne = process.argv[2];
var argTwo = process.argv[3];

console.log(argOne);
var keys = require('./keys.js');
var Twitter = require('twitter');
var request = require('request');
var fs = require("fs");

var Spotify = require("node-spotify-api");  
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

 



 
//spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
  //  if ( err ) {
    //    console.log('Error occurred: ' + err);
      //  return;
    //}
 
    // Do something with 'data' 
//});

