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
        validate:{
            validator: function(v){
                return /^\d{1,2}h\s\s{1,2}min$/.test(v)
            },
            message: (props) => `${props.value} no corresponde con un valor de tipo XXh XXmin`,
        },
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
        validate:{
            validator: function(v){
                return /https?\/\/.+\.(png|jpe?g|gif|webpt)$/.test(v)
            },
            message: (props) => 
                `${props.value} no corresponde con un valor de tipo Url`,
        },
        required: [true, "La poster es requerida"],

    },
});
//crear el modelo 
const Movie = model("Movie", movieSchema);

module.exports = {
    Movie,
};
