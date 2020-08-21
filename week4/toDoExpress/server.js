const express = require("express")
const app = express()
const morgan = require("morgan")

// Middleware for requests
app.use(express.json())
app.use(morgan("dev"))

// Route
app.use("/todo", require("./todoRouter.js"))

// Set up server
app.listen(8000, () => {
    console.log("The server is running on Port 8000")
})