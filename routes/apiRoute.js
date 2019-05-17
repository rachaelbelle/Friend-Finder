var friendData = require("../data/friends");


module.exports = function(app) {

  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------



  app.post("/api/friends", function(req, res) {

    var newFriend = req.body;

    for(var i = 0; i < newFriend.scores.length; i++){
      newFriend.scores[i] + parseInt(newFriend.scores[i]);
    }
    var friendMatch = 0;
    var minDiff = 1000;

    for(var i = 0; i < friendData.length; i++){
      var totalDiff = 0;
      for(var j = 0; j < friendData[i].scores.length; j++){
        var diff = Math.abs(newFriend.scores[j] - friendData[i].scores[j]);
        totalDiff += diff;
      }

      if(totalDiff < minDiff) {
        friendMatch = i;
        minDiff = totalDiff;
      }

      console.log("minimum difference" + minDiff);
      console.log("friend match is " + friendMatch)

    }







    console.log(req.body)
    friendData.push(req.body);
    // res.json(true);
    res.json(friendData[friendMatch]);


  });

  app.post("/api/clear", function(req, res) {
    friendData = [];
  });


  // app.post("/api/clear", function(req, res) {
  //   friendData.length = 0;
  //   res.json({ ok: true });
  // });
};
