function validationDataMovie(req, res, next) {
    let propertiesMovie = {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
    }
    for (const key in propertiesMovie){
        propertiesMovie[key] = req.body[key]
    }
    if (Object.values(propertiesMovie).includes(undefined)){
        res.send("Pelicula incompleta, faltan datos");
    }else{
        next()
    }
}

module.exports = {
    validationDataMovie,
}