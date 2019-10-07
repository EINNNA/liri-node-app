require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
//var lineBreak = console.log("+++++++++++++++++");

var command = process.argv[2]; //
var search = process.argv.slice(3).join(" ");

function liri(search) {

switch (command) {
    case "concert-this":
        console.log("Looking for the concert!");
        findConcert(search);
    break;
    
    case "spotify-this-song":
        console.log("Looking for the song!");
        findSong(search);

    break;

    case "movie-this":
        console.log("Looking for the movie!");
        findMovie(search);

    break;

    case "do-what-it-says":
        console.log("Doing something");
        doRandom();
    break;

    default:
        console.log("Not an option, please pick concert-this, spotify-this-song, movie-this or do-what-it-says ")
    }
}

//BAND IN TOWN SEARCH FUNCTION
    function findConcert(search) {
        axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp").then(
            function(err, response){
                if (response) { 
                    console.log("Error!");
                    console.log(err);
                } else {
                var res = response.data[i];
                lineBreak;
                console.log("Venue Name:" + res.venue.name);
                console.log("Venue Location:" + res.venue.city);
                console.log("Date:" + moment(res.datetime[0]).format("MM/DD/YY"));
            }
        })
    };
//MOVIE SEARCH FUNCTION
    function findMovie(search) {
        axios.get("https://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy").then(
            function(err, response) {
                if (response) { 
                    console.log("Error!");
                    console.log(err);
                } else {
                //lineBreak;
                var res = response.data;
                console.log("Title:" + res.Title);
                console.log("Year:" + res.Year);
                console.log("IMBD Rating:" + res.imbdRating);
                console.log("Rotten Tomatoes Rating:" + res.Ratings[1].Value);
                console.log("Country:" + res.Country);    
                console.log("Language:" + res.Language);
                console.log("Plot:" + res.Plot);
                console.log("Actors:" + res.Actors);
                }
            })
    };
//SPOTIFY SEARCH FUNCTION
    function findSong(search) {
        spotify.search({
            type: "track",
            query: "searchTrack"
        }).then(function(response) {
            lineBreak;
            console.log("Artist:" + response.data.tracks.items[0].artists[0].name);
            console.log("Song:" + response.data.tracks.items[0].name);
            console.log("Preview:" + response.data.tracks.items[3].preview_url);
            console.log("Album:" + response.data.tracks.items[0].album.name);
        })            

        }

    function doRandom(search) {
        fs.readFile("random.txt", "utf8", function(error, data) {
            if (error) {
                return(console.log(error));
            } 
        })
    }

liri();