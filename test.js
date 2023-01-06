

const express = require("express");
const app = express();
const port = 8080;


const songs = ["New York, New York", "That's Life", "Fly Me to the Moon", "My Way", "Jingle Bells" , "Come Fly with Me", "Somehthin' Stupid", 
"Summer Wind", "I've got You Under My Skin", "Luck Be A Lady", "I'm a Fool to Want You", "Let It Snow! Let It Snow! Let It Snow!", 
"Santa Claus Is Coming To Town", "Everybody Loves Somebody", "Let Me Try Again", "It Had To Be You", "Silent Night, Holy Night",
 "Mistletoe and Holly", "You Make Me Feel so Young"]


app.get("/", (req, res) => {
    console.log("Here route ROOT")
    const RandomSongs = songs[Math.floor(Math.random() * songs.length)]

    res.send({songs:RandomSongs})
})

app.get("/gtn", (req, res) => {
    res.send("Hello Gaetan")
})


app.listen(port, (error) =>{
    if(!error)
    console.log("Server is Succesfully Running, and app is listening on port" + port)
    else
    console.log("Error occured, server can't start", error);

})


console.log(songs)