var waze = require("waze");

var wazeLogin = {
  user_id: "CaioWilson",
  password: "cotd923]"
};

waze.createClient(wazeLogin, function(err, client) {
  client.trips.get(function(err, trips) {

    console.log("trip count: ", trips.length);

    var lastTrip = trips.shift();
    console.log("lastTrip: ", lastTrip);

    client.trip.get(lastTrip.id, function(err, trip){
      trip.forEach(function(segment){
        console.log("trip segment detail: ", segment);
      });
    });

  });
});
