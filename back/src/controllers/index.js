const { getAllMoviesService, postMovieService, } = require("../services/index.js")

async function getAllMoviesController(req, res){
    try {
        const response = await getAllMoviesService()
        res.send(response);
    } catch (error) {
        res.send(error)
    }
    
}
async function postMovieController(req, res) {
    try {
        const newMovie = await postMovieService(req.body)
        const response = {
            message: "Movie Created successfully",
            status: "ok",
            error: false,
            data: newMovie
        }
        res.json(response);
    } catch (error) {
        res.json({
            message: "Error al Crear la pelicula",
            status: "fail",
            error: true,
            data: error,
        });
    }    
}
module.exports = {
    getAllMoviesController,
    postMovieController,
}