const axios = require("axios");

let titleInput, yearInput, directorInput, durationInput, genreInput, posterInput, rateInput;

const extractInputs = () => {
    titleInput = document.getElementById("title");
    yearInput = document.getElementById("year");
    durationInput = document.getElementById("duration");
    directorInput = document.getElementById("director");
    genreInput = document.getElementById("genre");
    rateInput = document.getElementById("rate");
    posterInput = document.getElementById("poster");
};

const clearInputs = () => {
    extractInputs();
    titleInput.value = "";
    yearInput.value = "";
    durationInput.value = "";
    directorInput.value = "";
    genreInput.value = "";
    rateInput.value = "";
    posterInput.value = "";
};

const validateInputs = () => {
    const inputs = [titleInput, yearInput, durationInput, directorInput, genreInput, rateInput, posterInput];

    let isValid = true;

      inputs.forEach((input) => {
        if (!input.value) {
            input.classList.add("error");
            isValid = false;
        } else {
            input.classList.remove("error");
        }
    });
  
      return isValid;
}

const createMovie = (event) => {
    event.preventDefault();
    extractInputs();
    if (!validateInputs()) {
        alert("Por Favor complete todos los campos");
        return;
    }

    const movie ={
        title: titleInput.value,
        year: yearInput.value,
        duration: durationInput.value,
        director: directorInput.value,
        genre: genreInput.value.split(","),
        rate: rateInput.value,
        poster: posterInput.value,
    }

    axios.post("http://localhost:3000/movies", movie)
        .then(({ data }) => {
            alert(data.message)
            clearInputs();
    })
    .catch((err) => {
        alert(err.message)
        console.error(err);
    })
    clearInputs();
    return movie;
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", createMovie);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearInputs);

module.exports = {
    createMovie,
}