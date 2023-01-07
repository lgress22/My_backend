const express = require("express");
const app = express();
const port = 8080;
const basicAuth = require("express-basic-auth")

const songs = ["New York, New York", "That's Life", "Fly Me to the Moon", "My Way", "Jingle Bells" , "Come Fly with Me", "Somehthin' Stupid", 
"Summer Wind", "I've got You Under My Skin", "Luck Be A Lady", "I'm a Fool to Want You", "Let It Snow! Let It Snow! Let It Snow!", 
"Santa Claus Is Coming To Town", "Everybody Loves Somebody", "Let Me Try Again", "It Had To Be You", "Silent Night, Holy Night",
 "Mistletoe and Holly", "You Make Me Feel so Young"]

 const wives = ("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx")

app.get("/", (req, res) => {
    console.log("This is working")
    const RandomSongs = songs[Math.floor(Math.random() * songs.length)]

    res.send(RandomSongs)
})

app.get("/birth_date", (req, res) => {
    res.send("December 12, 1915")
})

app.get("/birth_city", (req, res) => {
    res.send("Hoboken, New Jersey")
})

app.get("/wives", (req, res) => {
    res.send(wives)
})


app.get("/picture", (req,res) => {
    res.redirect("https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2-_Pal_Joey.jpg");
})


app.get("/public", (req, res) => {
    console.log("hEllo bUd")
    res.send("Everybody can see this page");
})


// app.use(basicAuth({
//     users: {"admin": "admin"}
// }))

app.get("/protected", (req, res, next) => {
    res.send("https://admin:admin@web-t297d0143-1e82.docode.us.qwasar.io")
    next("Welcome, authorized client")
})


app.listen(port, (error) =>{
    if(!error)
    console.log("Server is Succesfully Running, and app is listening on port" + port)
    else
    console.log("Error occured, server can't start", error);

})


console.log(songs)