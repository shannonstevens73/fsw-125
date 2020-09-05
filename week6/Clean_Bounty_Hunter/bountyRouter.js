const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid/v4")

// Data for bounties
const bounty = [
    { firstName: "Angel", lastName: "Fire", isAlive: "true", bountyAmount: 1500, type: "Jedi", _id: uuid() },
    { firstName: "Fighter", lastName: "Jane", isAlive: "true", bountyAmount: 1800, type: "Jedi", _id: uuid() },
    { firstName: "Hunter", lastName: "Kyle", isAlive: "true", bountyAmount: 1100, type: "Jedi", _id: uuid() },
    { firstName: "Wayne", lastName: "Lanston", isAlive: "false", bountyAmount: 0, type: "Sith", _id: uuid() },
    { firstName: "Lord", lastName: "Austin", isAlive: "true", bountyAmount: 2500, type: "Sith", _id: uuid() }   
]

// Get
bountyRouter.get("/", (req, res) => {
    res.send(bounty)
})

// Get One
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounty.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

// Post
    bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounty.push(newBounty)
    res.send(newBounty)
})

// Delete
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyID
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    bounty.splice(bountyIndex, 1)
    res.send("Successfully deleted Bounty!")
})

// Put
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    const updateBounty = Object.assign(bounty[bountyIndex], updateObject)
    res.send(updateBounty)
})

module.exports = bountyRouter