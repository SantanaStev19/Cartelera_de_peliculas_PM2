const router = require("express").Router()
const { getAllMoviesController } = require("../controllers/index.js")

router.get("/movies", getAllMoviesController)

module.exports = {
    router
}
