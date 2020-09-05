import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './Bounty.js'
import AddBountyForm from './AddBountyForm'


function App() {
  const [bounty, setBounty] = useState([])

  function getBounty(){
    axios.get("/bounty")
      .then(res => setBounty(res.data))
      .catch(err => console.log(err))
  } 

  function addBounty(newBounty){
    axios.post("/bounty", newBounty)
      .then(res => {
        setBounty(prevBounty => [...prevBounty, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId){
    axios.delete(`/bounty/${bountyId}`)
      .then(res => {
        setBounty(prevBounty => prevBounty.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId){
    axios.put(`/bounty/${bountyId}`, updates)
      .then(res => {
        setBounty(prevBounty => prevBounty.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounty()
  }, [])  

  return (
    <div>
        <div className="bountyContainer">
          <AddBountyForm
            submit={addBounty} 
            buttonText="Add Bounty"
          />
          { bounty.map(bounty => 
            <Bounty 
              {...bounty} 
              key={bounty.firstName}
              deleteBounty={deleteBounty}
              editBounty={editBounty}/>)
          }
        </div>
    </div>
  )
}

export default App
