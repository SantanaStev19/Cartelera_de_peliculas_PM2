const axios = require("axios")
const { renderCards } = require("./renderCard")

const fetchdata = (URL) => {
// CON AJAX
    // $.get(URL,(data) => {
    //     renderCards(data);
    // }).fail(() => {
    //     alert("Error al obtener el listado de peliculas");
    // });
// CON AXIOS con promesas
    axios.get(URL).then((res) => {
        renderCards(res.data);
    }).catch((reason) => {
        console.error(`Error al obterner las peliculas: ${reason}`)
    })
    .finally(() => {
        console.log("finalizo la peticion")
    })
// CON AXIOS con async await
    // try{
    //     const {data} = await axios.get(URL);
    //     renderCard(data);
    // }   catch (reason) {
    //     console.error(`Error al obtener las peliculas: ${reason}`)
    // }   finally {
    //     console.log("finalizo la peticion")
    // }
};

module.exports = {
    fetchdata,
}

