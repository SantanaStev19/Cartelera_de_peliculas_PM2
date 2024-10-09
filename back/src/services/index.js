const axios = require("axios")
const { Movie } = require("../models")

 async function getAllMoviesService(){
    try{
        const resp = await Movie.find();
        console.log(resp);
        return resp;
    } catch (error){
        console.error(error.message)
        throw error
    }
}

module.exports = {
    getAllMoviesService,
}