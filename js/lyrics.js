var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, + '/index.html'))
});

app.post('/auth', function(request, response) {
    var title = request.body.title;
    var artist = request.body.artist;

const getLyrics = require ('./getLyrics')
const getSong = require('./getSong')
const options ={
        apiKey:'6GLWW4-SEQJ4mJCMZaQSE3bEEwDMQ3RGRdyAnKHWb5EijepTpU-zvSwGvbIrq_Om',
        title: title,
        artist: artist,
        optimizeQuery: true
    }
    
getLyrics(options).then((lyrics)=>console.log(lyrics));
getSong(options).then((song)=> {
    const lyric = song.lyrics
    response.send(`${lyric}`)
});
});
app.listen(5001);
