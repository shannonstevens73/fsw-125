const express = require("express")
const app = express()
const morgan = require("morgan")

// Middleware
app.use(express.json())
app.use(morgan("dev"))

// Route
app.use("/fruit", require("./fruitRouter.js"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server
app.listen(8000, ()=> {
    console.log("The server is running on Port 8000")
})