

/*        <div class="movieCard">
            <h3 class="cardTitle">Title</h3>
            <img
              class="cardImg" 
             src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" 
            />
            <div class="cardTags">
              <span class="tag">Genero 1</span>
              <span class="tag">Genero 1</span>
              <span class="tag">Genero 1</span>
            </div>
            <div class="cardRate">
              <span>7.8</span>
            </div>
        </div> */

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
console.log(tempData)

renderCards(tempData);