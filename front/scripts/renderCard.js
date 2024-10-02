const createCard = require("./createCard");

const renderCards = (data) => {
    const cards = data.map(createCard);
    const container = document.getElementById("moviesContainer");
    container.innerHTML = "";
    cards.forEach((el) => {
        container.appendChild(el);
    });
};

module.exports = renderCards;