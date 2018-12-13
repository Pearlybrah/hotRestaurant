var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var newGuests = [];
var waitList = [];

let waiters = {
    name: "",
    phone: "",
    email: "",
    userID: ""
};
let guest = {
    name: "",
    phone: "",
    email: "",
    userID: ""
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

app.post("/api/tables", function(req, res) {
    newGuests.push(guest);
    waitList.push(waiters);
});

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
})