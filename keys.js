var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var nodeSpotifyAPI = require("node-spotify-api");
var dotEnv = require("dotenv");
var lineBreak = console.log("+++++++++++++++++");
function Liri(search) {
    this.search = search;

//BAND IN TOWN SEARCH FUNCTION
    this.findConcert = function() {
        axios.get("https://rest.bandsintown.com/artists/" + this.search + "/events?app_id=codingbootcamp").then(
            function(response){
                lineBreak;
                console.log("Venue Name:" + response.venue.name);
                console.log("Venue Location:" + response.venue.city);
                console.log("Date:" + moment(response.venue.name).format("MMM Do YY"));
                
            }
        )
    }
//MOVIE SEARCH FUNCTION
    this.findMovie = function() {
        axios.get("https://www.omdbapi.com/?t=" + this.search + "&y=&plot=short&apikey=trilogy").then(
            function(response) {
                lineBreak;
                console.log("Title:" + response.data.Title);
                console.log("Year:" + response.data.Year);
                console.log("IMBD Rating:" + response.data.imbdRating);
                console.log("Rotten Tomatoes Rating:" + response.data.Ratings[1].Value);
                console.log("Country:" + response.data.Country);    
                console.log("Language:" + response.data.Language);
                console.log("Plot:" + response.data.Plot);
                console.log("Actors:" + response.data.Actors);
            }



        )
    }
//SPOTIFY SEARCH FUNCTION
    this.findSong = function() {
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
    }

    this.doRandom = function() {
        fs.readFile("random.txt", "utf8", function(error, data) {
            
        })
    }
}




module.exports = liri;