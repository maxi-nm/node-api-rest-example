let mongoose = require("mongoose");
let Movies = mongoose.model("Movies");

//GET - Return all movies in the DB
exports.findAllMovies = function (req, res) {
  Movies.find(function (err, movies) {
    if (err) res.send(500, err.message);

    console.log("GET /movies");
    res.status(200).jsonp(movies);
  });
};