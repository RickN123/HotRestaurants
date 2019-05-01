// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function (req, res) {
    // res.send("Hey, welcome to the table page!");
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reservation", function (req, res) {
    // res.send("Hey, welcome to the reservation page!");
    res.sendFile(path.join(__dirname, "reservation.html"));
});

require("./apitable")(app);





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});