var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var newGuests = [];

function Guests(name, phone, email, userID) {
    this.name = name
    this.phone = phone,
    this.email = email,
    this.userID = userID
    newGuests.push(Guests());
};

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});


app.get("/reserves", function(req, res) {
    res.sendFile(path.join(__dirname, "reserves.html"));
});

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
})