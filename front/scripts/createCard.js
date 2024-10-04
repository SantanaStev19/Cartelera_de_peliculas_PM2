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

module.exports = {
    createCard
}