const express = require("express")
const fruitRouter = express.Router()
const uuid = require("uuid/v4")

// Data
const fruit = [
    {type: "banana", brand: "chiquita", price: 1.5},
    {type: "apple", brand: "gala", price: 2.0},
    {type: "orange", brand: "naval", price: 1.75},
    {type: "watermelon", brand: "bradford", price: 2.5}
]

// Get
fruitRouter.get("/", (req, res) => {
    res.send(fruit)
    (err => console.log(err.response.data.errMsg))
})

// Get by type
fruitRouter.get("/type", (req, res, next) => {
    const type = req.query.type
    if(!type){
        const error = new Error("You must provide a type")
        return next(error)
    }
    const filteredFruit = fruit.filter(fruit => fruit.type === type)
    res.send(filteredFruit)
})

module.exports = fruitRouter