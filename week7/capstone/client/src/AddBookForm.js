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
                id="firstName"
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="author's first name"/>
                
            
            <input
                id="lastName"
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

            <br /><br />

            <input
                id="bookByAuthor"
                type="text"
                name="bookByAuthor"
                value={inputs.bookByAuthor}
                onChange={handleChange}
                placeholder="book by author"/>      
            
            <input
                id="number"
                type="number"
                name="numBooks"
                value={inputs.numBooks}
                onChange={handleChange}
                placeholder="number of books written"/>  

            

            <div id="alive">
                Author alive?
                <br />
                <label>
                    Alive
                    <input                        
                        type="radio" 
                        name="isAlive"
                        value="Alive"
                        checked={inputs.isAlive === "Alive"}
                        onChange={handleChange}
                    /> 
                </label>

                <label>
                    Dead
                    <input 
                        type="radio" 
                        name="isAlive"
                        value="Dead"
                        checked={inputs.isAlive === "Dead"}
                        onChange={handleChange}
                    /> 
                </label>
            </div>    

            <button id="addBookButton">{props.buttonText}</button>
        </form>
    )

}

export default AddBookForm