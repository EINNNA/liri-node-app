var command = process.argv[2]; //
var search = process.argv.slice(3).join(" ");


switch (command) {
    case "concert-this":
        console.log("Looking for the concert!");
        var newConcert = new Liri(search);
    break;
    
    case "spotify-this-song":
        console.log("Looking for the song!");
        var newSong = new Liri(search);

    break;

    case "movie-this":
        console.log("Looking for the movie!");
        var newMovie = new Liri(search);

    break;

    case "do-what-it-says":
        console.log("Doing something");
        var newTV = new TV(search);

    break;

    default:
        console.log("Not an option, please pick concert-this, spotify-this-song, movie-this or do-what-it-says ")
    }