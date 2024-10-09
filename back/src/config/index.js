require("dotenv").config();
const mongoose = require("mongoose");
const { URI } = process.env;
//recordar cambiar la contaseña y apuntar a la base de datos
const dbConnect = async () => {
    try {
        await mongoose.connect(URI);
        return "Connected to database"
    } catch (error) {
        console.log("Error coonnecting to database");
    } 
};

module.exports ={
    dbConnect,
}