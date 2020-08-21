const express = require("express")
const todoRouter = express.Router()
const uuid = require("uuid/v4")

// Data for todo
const todo = [
    { 
        name: "Homework", 
        description: "Server Side Project 2", 
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80", 
        completed: false, 
        _id: uuid() 
    },  
    { 
        name: "Read", 
        description: "Eloquent JavaScript", 
        imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60", 
        completed: false, 
        _id: uuid() 
    },  
    { 
        name: "Housework", 
        description: "Wash dishes, dustmop floor", 
        imageUrl: "https://images.unsplash.com/photo-1530834812229-7c2189840e5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60", 
        completed: true, 
        _id: uuid() 
    },  
    { 
        name: "Cook", 
        description: "Vegetable Lasagna", 
        imageUrl: "https://images.unsplash.com/photo-1597289124948-688c1a35cb48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60", 
        completed: true, 
        _id: uuid() 
    } 
]

// Get
todoRouter.get("/", (req, res) => {
    res.send(todo)
})

// Get One
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todo.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

// Post
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todo.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the database!`)
})

// Delete
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoID
    const todoIndex = todo.findIndex(todo => todo._id === todoId)
    todo.splice(todoIndex, 1)
    res.send("Successfully deleted the ToDo!")
})

// Put
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todo.findIndex(todo => todo._id === todoId)
    const updateTodo = Object.assign(todo[todoIndex], updateObject)
    res.send(updateTodo)
})

module.exports = todoRouter