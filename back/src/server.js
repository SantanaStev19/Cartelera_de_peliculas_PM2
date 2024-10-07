const morgan = require("morgan")
const express = require("express")
const cors = require("cors")
const { router } = require("./routes/index.js")

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(router)

module.exports = {
    app
}