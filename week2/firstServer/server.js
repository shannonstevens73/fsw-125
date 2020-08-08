const express = require("express")
const app = express()

// Data for users
const users = [
    { name: "Shannon", age: 15 },
    { name: "Annette", age: 25 },
    { name: "Joshua", age: 35 }
]

// Do get for users
app.get("/users", (req, res) => {
    res.send(users)
})

// Data for movies
const movies = [
    { name: "Star Wars Ep. 9", genre: "Science Fiction" },
    { name: "The Lord of the Rings", genre: "Fantasy" },
    { name: "Hunger Games", genre: "Dystopian" }
]

// Do get for movies
app.get("/movies", (req, res) => {
    res.send(movies)
})

// Data for books
const books = [
    { name: "101 Famous Poems", genre: "Poetry" },
    { name: "Harry Potter", genre: "Fantasy" },
    { name: "Dracula", genre: "Gothic" }
]

// Do get for books
app.get("/books", (req, res) => {
    res.send(books)
})

// Set up server
app.listen(8000, () => {
    console.log("The server is running on Port 8000")
})
