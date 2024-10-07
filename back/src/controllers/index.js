const { getAllMoviesService } = require("../services/index.js")

async function getAllMoviesController(req, res){
    try {
        const response = await getAllMoviesService()
        res.send(response);
    } catch (error) {
        res.send(error)
    }
    
}

module.exports = {
    getAllMoviesController,
}