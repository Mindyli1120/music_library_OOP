const util = require('util');

function Library(name, creator) {
    this.name = name,
    this.creator = creator
    this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
    this.playlists.push(playlist);
}

function Playlist(playlistName) {
    this.playlistName = playlistName
    this.tracks = [];
    //can have many tracks
}

Playlist.prototype.addTracks = function(track) {
    this.tracks.push(track);
}

function Track(title, rating, length){
    this.title = title,
    this.rating = rating,
    this.length = length
}

Playlist.prototype.overallrating = function() {
    let sum = 0;
    this.tracks.forEach((track) => {
        sum = sum + track.rating;
    })
    const overallrating = Math.round(sum / (this.tracks.length));
    return overallrating;
}

Playlist.prototype.totalDuration = function() {
    let total = 0;
    this.tracks.forEach((track) => {
        total = total + track.length;
    })
    return total;
}

const libraryOne = new Library('library1', 'User1');
const playlistOne = new Playlist('Playlist1');
const playlistTwo = new Playlist('Playlist2');
const trackOne = new Track('Song1', 4, 60);
const trackTwo = new Track('Song2', 5, 70);
const trackThree = new Track('Song3', 4, 80);
const trackFour = new Track('Song4', 1, 40);
playlistOne.addTracks(trackOne);
playlistOne.addTracks(trackThree);
playlistOne.addTracks(trackTwo);
playlistTwo.addTracks(trackOne);
playlistTwo.addTracks(trackThree);
playlistTwo.addTracks(trackFour);
libraryOne.addPlaylist(playlistOne);
libraryOne.addPlaylist(playlistTwo);
console.log(util.inspect(libraryOne, false, null));
console.log('Playlist1 overall rating', playlistOne.overallrating());
console.log('Playlist2 overall rating', playlistTwo.overallrating());

console.log('Playlist1 total duraction', playlistOne.totalDuration());
console.log('Playlist2 total duraction', playlistTwo.totalDuration());