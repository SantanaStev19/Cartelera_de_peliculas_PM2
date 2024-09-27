const URL = "https://students-api.up.railway.app/movies";

const fetchdata = () => {
    $.get(URL,(data) => {
        renderCards(data);
    }).fail(() => {
        alert("Error al obtener el listado de peliculas");
    });
};



const createCard = (movie) => {
    const card = document.createElement("div");
    card.classList.add("movieCard");

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("cardTitle");
    cardTitle.innerHTML = movie.title;

    const poster = document.createElement("img");
    poster.src = movie.poster;
    poster.classList.add("cardImg");

    const tags = document.createElement("div");
    tags.classList.add("cardTags");

    const genresTags = movie.genre.map((text) => {
        const tag = document.createElement("span");
        tag.classList.add("tag");
        tag.innerHTML = text;
        return tag;
    });

    genresTags.forEach((element) => {
        tags.appendChild(element);
    });

    //const rate = document.createElement("")//

    card.appendChild(cardTitle);
    card.appendChild(poster);
    card.appendChild(tags);

    return card;

}

const renderCards = (data) => {
    const cards = data.map(createCard);
    const container = document.getElementById("moviesContainer");
    container.innerHTML = "";
    cards.forEach((el) => {
        container.appendChild(el);
    });

};    

fetchdata();
