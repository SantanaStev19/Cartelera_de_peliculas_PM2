const router = require("express").Router()
const { getAllMoviesController, 
        postMovieController, 
} = require("../controllers/index.js")
const { validationDataMovie } = require("../middlewares/index.js")

router.get("/movies", getAllMoviesController)
router.post("/movies", validationDataMovie, postMovieController)

module.exports = {
    router
}
