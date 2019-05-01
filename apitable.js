var tableArray = [
    {
        customerName: "John",
        customerEmail: "john@example.com",
        customerID: "John123",
        phoneNumber: "215-987-3456"
    }
];

var waitingArray = [
    {
        customerName: "Sam",
        customerEmail: "sam@example.com",
        customerID: "sam101",
        phoneNumber: "267-456-9876",
  }
];

module.exports = function(app) {
    app.get("/api/tables", function(req, res) {
      res.json(tableArray);
    });
  
    app.get("/api/waitlist", function(req, res) {
      res.json(waitingArray);
    });
  
    app.post("/api/tables", function(req, res) {
      if (tableArray.length < 5) {
        tableArray.push(req.body);
        res.json(true);
      }
      else {
        waitingArray.push(req.body);
        res.json(false);
      }
    });
  
    app.post("/api/clear", function() {
        tableArray = [];
        waitingArray = [];
  
      console.log(tableArray);
    });
  };
  