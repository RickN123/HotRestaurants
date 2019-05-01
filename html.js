var path = require("path");

module.exports = function(app) {

  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "./table.html"));
  });

  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "./reservation.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./reservation.html"));
  });
};