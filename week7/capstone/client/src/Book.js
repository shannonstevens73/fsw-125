import React, { useState } from 'react'        
import AddBookForm from './AddBookForm.js'

function Book(props) {
    const { firstName, lastName, genre, isAlive, bookByAuthor, numBooks, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="book">
            { !editToggle ?
                <>
                    <h3>Name: { firstName } { lastName }</h3>
                    <p>Genre: { genre }</p>
                    <p>Still alive? { isAlive }</p>
                    <p>Book by Author: { bookByAuthor } </p>
                    <p>Number of books written by author: { numBooks }</p>
                    <button
                        className="deleteButton"
                        onClick={() => props.deleteBook(_id)}>
                        Delete
                    </button>
                    <button
                        className="editButton"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>            
                        Edit
                    </button>
                </>
            :
                <>
                    <AddBookForm
                        firstName={firstName}
                        lastName={lastName}
                        genre={genre}
                        isAlive={isAlive}
                        bookByAuthor={bookByAuthor}
                        numBooks={numBooks}
                        _id={_id}
                        buttonText="Submit Edit"
                        submit={props.editBook} 
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }
        </div>
    )
}


export default Book