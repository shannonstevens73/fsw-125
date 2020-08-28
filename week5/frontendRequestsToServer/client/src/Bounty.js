import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm.js'

function Bounty(props) {
    const { firstName, lastName, isAlive, bountyAmount, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="bounty">
            { !editToggle ?
                <>
                    <h3>Name: { firstName } { lastName }</h3>
                    <p>Still alive? { isAlive }</p>
                    <p>Bounty Price: { bountyAmount }</p>
                    <p>Sith or Jedi? { type }</p>
                    <button
                    className="deleteButton"
                    onClick={() => props.deleteBounty(_id)}>Delete</button>
                    <button
                        className="editButton"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>            
                        Edit
                    </button>
                </>
            :
                <>
                    <AddBountyForm
                        firstName={firstName}
                        lastName={lastName}
                        isAlive={isAlive}
                        bountyAmount={bountyAmount}
                        type={type}
                        _id={_id}
                        buttonText="Submit Edit"
                        submit={props.editBounty} 
                    />
                    <button
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                    >Close</button>
                </>
            }
        </div>
    )
}


export default Bounty