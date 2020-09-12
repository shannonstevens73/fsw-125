const express = require("express")  
const bookRouter = express.Router()
const uuid = require("uuid/v4")

// Data for books
const book = [
    { 
        firstName: "John",
        lastName: "Tolkien", 
        genre: "fantasy",
        isAlive: "false", 
        bookByAuthor: "The Lord of the Rings",
        numBooks: 8, 
        _id: uuid() 
    },

    { 
        firstName: "Becky",
        lastName: "Eldredge", 
        genre: "nonfiction",
        isAlive: "true", 
        bookByAuthor: "The Inner Chapel",
        numBooks: 2, 
        _id: uuid() 
    },

    { 
        firstName: "Drew",
        lastName: "Karpyshyn", 
        genre: "scifi",
        isAlive: "true", 
        bookByAuthor: "Rule of Two, Darth Bane 2",
        numBooks: 24, 
        _id: uuid() 
    }    
]

// Get
bookRouter.get("/", (req, res) => {
    res.status(200).send(book)
    (err => console.log(err.response.data.errMsg))
})

// Get One
bookRouter.get("/:bookId", (req, res, next) => {
    const bookId = req.params.bookId
    const foundbook = book.find(book => book._id === bookId)
    if(!foundbook){
        const error = new Error(`The item with id ${bookId} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundbook)
})

// Query
bookRouter.get("/search/genre", (req, res, next) => {
    const genre = req.query.genre
    if(!genre){
        const error = new Error("You must provide a genre")
        res.status(500)
        return next(error)
    }
    const filteredBook = book.filter(book => book.genre === genre)
    res.status(200).send(filteredBook)
})

// Post
    bookRouter.post("/", (req, res) => {
    const newBook = req.body
    newBook._id = uuid()
    book.push(newBook)
    res.status(201).send(newBook)
})

// Delete
bookRouter.delete("/:bookId", (req, res) => {
    const bookId = req.params.bookID
    const bookIndex = book.findIndex(book => book._id === bookId)
    book.splice(bookIndex, 1)
    res.send("Successfully deleted book!")
})

// Put
bookRouter.put("/:bookId", (req, res) => {
    const bookId = req.params.bookId
    const updateObject = req.body
    const bookIndex = book.findIndex(book => book._id === bookId)
    const updatedBook = Object.assign(book[bookIndex], updateObject)
    res.status(201).send(updatedBook)
})

module.exports = bookRouter