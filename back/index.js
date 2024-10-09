const { dbConnect } = require("./src/config")
const { app } = require("./src/server")

const host = "localhost"
const port = 3000 

dbConnect()  // coneccion a la base de datos
 
    .then((data) => {
        console.log(data)
        app.listen(port, host ,() => {
            console.log(`listening server on http://${host}:${port}`);
        });
}).catch((err) => {
    console.log(err);
})