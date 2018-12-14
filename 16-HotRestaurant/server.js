var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var newGuests = [];
var waitList = [];


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
    let newUser = req.body;
    
    if (newGuests.length < 5) {
        newGuests.push(newUser);
    } else {
        waitList.push(newUser);
    };

    console.log(newUser);
    res.json(newUser);

});

app.get("/api/tables/reserved", function(req, res) {
    return res.json(newGuests);
});

app.get("/api/tables/waitlist", function(req, res) {
    return res.json(waitList);
});

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});