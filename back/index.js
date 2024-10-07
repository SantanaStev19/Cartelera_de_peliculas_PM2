const { app } = require("./src/server")

const host = "localhost"
const port = 3000 

app.listen(port, host ,() => {
    console.log(`listening server on http://${host}:${port}`);
})