var mongoose = require("mongoose");

var novelSchema = mongoose.Schema({
  FName: String,
  Email: String,
  City: String,
  Country: String,
  Novel_name: String,
  Genre: String
});
const Novel = mongoose.model("Novel", novelSchema);
module.exports = Novel;