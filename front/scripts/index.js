const URL = "https://students-api.up.railway.app/movies";
const renderCards = require("./renderCard");

const fetchdata = () => {
    $.get(URL,(data) => {
        renderCards(data);
    }).fail(() => {
        alert("Error al obtener el listado de peliculas");
    });
};

fetchdata();
