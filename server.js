var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

// Displays all characters
app.get("/api/reservation", function (req, res) {
    return res.json(reservation);
});

// Displays a single character, or returns false
app.get("/api/reservation", function (req, res) {
    var chosen = req.params.reservation;

    console.log(chosen);

    for (var i = 0; i < reservation.length; i++) {
        if (chosen === reservation[i].routeName) {
            return res.json(reservation[i]);
        }
    }

    return res.json(false);
});

app.post("/api/reservation", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreservation);

    reservation.push(newreservation);

    res.json(newreservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});