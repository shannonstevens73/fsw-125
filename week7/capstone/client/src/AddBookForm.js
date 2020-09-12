import React, { useState } from 'react'

function AddBookForm(props){
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", genre: props.genre || "", isAlive: false, bookByAuthor: props.bookByAuthor || "",  numBooks: props.numBooks }
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
            <h3>Add a Book</h3>            
            
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="author's first name"/>
                
            
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="author's last name"/>

            <br /><br />

            <input
                type="text"
                id="genre"
                name="genre"
                value={inputs.genre}
                onChange={handleChange}
                placeholder="genre"
            />

            Is the author alive?
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
                /> Deceased
            </label>

            <br /><br />

            <input
                type="text"
                name="bookByAuthor"
                value={inputs.bookByAuthor}
                onChange={handleChange}
                placeholder="book by author"/>      
            
            <input
                type="number"
                name="numBooks"
                value={inputs.numBooks}
                onChange={handleChange}
                placeholder="number of books written"/>  

            <br /><br />            

            <button>{props.buttonText}</button>
        </form>
    )

}

export default AddBookForm