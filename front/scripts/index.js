const { fetchdata } = require("./fetchdata");

if (window.location.href.includes("newMovies.html")) {
    require("./createMovie");
}

const URL = "http://localhost:3000/movies";


fetchdata(URL);
