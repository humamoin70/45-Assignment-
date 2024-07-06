"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 40: Albums: Write a funtion called make_album()that build called object describing a music album The function should take in an artist name and an album title and it should return a object containing these two pieces of information Use the function to make three dictionaries representing different albums.
// print each return value to show that objects are storing the album information correctly.add an optional parameter to make_album() that allows you to store the number of track on an album if the calling line includes a value for the number of tracks  add that value to the albums object Make at least one new funtioncall that includes the number of tracks on an album. 
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        tilte: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("The Beatles", "Abbey Road");
let album2 = make_album("Queen", "A Night at the opera");
let album3 = make_album("Nirvana", "Nevermind", 12);
console.log(album1);
console.log(album2);
console.log(album3);
