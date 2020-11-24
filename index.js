const movieTrailer = require("movie-trailer");

movieTrailer("Truth Seekers")
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
