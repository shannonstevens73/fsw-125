import React, { useState } from 'react'

function AddBountyForm(props){
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", isAlive: false, bountyAmount: props.bountyAmount || "", type: "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a Bounty</h3>
            
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"/>
                
            
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"/>

            <br /><br />

            Alive?
            <label>
                <input 
                    type="radio" 
                    name="isAlive"
                    value="Alive"
                    checked={inputs.isAlive === "Alive"}
                    onChange={handleChange}
                /> Alive
            </label>

            <label>
                <input 
                    type="radio" 
                    name="isAlive"
                    value="Dead"
                    checked={inputs.isAlive === "Dead"}
                    onChange={handleChange}
                /> Dead
            </label>

            <br /><br />

            
            <input
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Price"/>  

            <br /><br />

            Religion:
            <label>
                <input 
                    type="radio" 
                    name="type"
                    value="Jedi"
                    checked={inputs.type === "Jedi"}
                    onChange={handleChange}
                /> Jedi
            </label>

            <label>
                <input 
                    type="radio" 
                    name="type"
                    value="Sith"
                    checked={inputs.type === "Sith"}
                    onChange={handleChange}
                /> Sith
            </label>

            <br /><br />

            <button>{props.buttonText}</button>
        </form>
    )

}

export default AddBountyForm