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

    console.log(newUser);
    res.json(newUser);

});

app.get("/api/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "reserves.html"));

    if (newGuests.length < 5) {
        newGuests.push(newUser);
    } else {
        waitList.push(newUser);
    };
});

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});