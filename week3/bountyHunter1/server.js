const express = require("express")
const app = express()
const uuid = require("uuid/v4")

// Middleware for requests
app.use(express.json())

// Data for bounties
const bounty = [
    { firstName: "Angel", lastName: "Fire", isAlive: "true", bountyAmount: 1500, type: "Jedi", _id: uuid() },
    { firstName: "Fighter", lastName: "Jane", isAlive: "true", bountyAmount: 1800, type: "Jedi", _id: uuid() },
    { firstName: "Hunter", lastName: "Kyle", isAlive: "true", bountyAmount: 1100, type: "Jedi", _id: uuid() },
    { firstName: "Wayne", lastName: "Lanston", isAlive: "false", bountyAmount: 0, type: "Sith", _id: uuid() },
    { firstName: "Lord", lastName: "Austin", isAlive: "true", bountyAmount: 2500, type: "Sith", _id: uuid() }   
]

// Do get for bounty
app.get("/bounty", (req, res) => {
    res.send(bounty)
})

// Do post for bounty
app.post("/bounty", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounty.push(newBounty)
    res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
})

// Set up server
app.listen(8000, () => {
    console.log("The server is running on Port 8000")
})