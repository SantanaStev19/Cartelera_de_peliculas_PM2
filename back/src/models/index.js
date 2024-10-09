//crear el esquima
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, "Titulo es obligatorio"]
    },

    year: {
        type: Number,
        required: [true, "Año es obligatorio"],
        min: [1888, "No existen peliculas validas para ese año"],
        max: [new Date().getFullYear() + 3, "El año supera el año limite"]
    },

    director: {
        type: String,
        required: [true, "Director es Obligatorio"]
    },
    duration: {
        type: String,
        required: [true, "La duracion es requerida"],
    },
    genre: {
        type: [String],
        required: true,
    },
    rate: {
        type: Number,
        required: true
    },
    poster: {
        type: String,
        required: [true, "La poster es requerida"],

    },
});
//crear el modelo 
const Movie = model("Movie", movieSchema);

module.exports = {
    Movie,
};
