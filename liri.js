
require("dotenv").config();

var argOne = process.argv[2];
var argTwo = process.argv[3];

//console.log(argOne);
var inquirer = require("inquirer");
var keys = require('./keys.js');
var Twitter = require('twitter');
var request = require('request');
var fs = require("fs");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//var movieName = process.argv[2];



inquirer
    .prompt([
        {
            type: 'list',
            name: "userChoice",
            message: "Choose an option NOW:",
            choices: [new inquirer.Separator(), 'spotify-this-song', 'movie-this', 'my-tweets', 'do-what-it-says']
        }

    ])
    .then(function (response) {



        if (argOne === "spotify-this-song") {
            spotify.search({ type: 'track', query: argOne, }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }

                console.log(data.tracks.items[0])

            })
        };

        if (argOne === "my tweets") {
            var params = { screen_name: 'charlieEcheese' };
            client.get('statuses/user_timeline', params, function (error, tweets, response) {
                if (error) {
                   console.log("There has been an error");
                }
                    //console.log("\nHere are your latest Tweets", + tweets[0].user.screen_name);
                   
                   
                    for (var i = 0; i < tweets.length; i++) {
                        console.log("DATE: " + tweets[i].created_at + "\nCTV TWEET:" + tweets[i].text);
                        console.log("----------------");

                    }
                })};

        if (argOne === "movie this") {


        };

        if (argOne === "do-what-it-says") {


        }
    });



    //console.log(data.tracks.items[0]);


