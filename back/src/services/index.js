const axios = require("axios")
const URL = "https://students-api.up.railway.app/movies";

 async function getAllMoviesService(){
    try{
        const response = await axios(URL)
        return response.data
    } catch (error){
        console.error(error.message)
        throw error
    }
}

module.exports = {
    getAllMoviesService,
}