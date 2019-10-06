var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);


var command = process.argv[2];
var search = process.argv.slice(3).join(" ");


switch (command) {
    case "actor":
        console.log("Searching for an actor");
        var newActor = new TV(search);
        newActor.findActor();
    break;
    
    case "tv":
        console.log("Searching for an TV Show");
        var newTV = new TV(search);
        newTV.findShow();
    break;

    default:
        console.log("Not an option")

    }