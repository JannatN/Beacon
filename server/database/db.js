const mongoose = require("mongoose");
const URI = "mongodb+srv://mays:123456789Root@beaconv02.8aghd.mongodb.net/BeaconV02?retryWrites=true&w=majority";

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("We are connected");
});

module.exports = {
  message: require('./models/message'),
<<<<<<< HEAD
  totals: require('./models/totals'),
  country: require('./models/country')
=======
  totals : require('./models/totals'),
  country : require('./models/country'),
>>>>>>> f56e67360bfe706ff4ea59cd136d51ffad86b8b2
}