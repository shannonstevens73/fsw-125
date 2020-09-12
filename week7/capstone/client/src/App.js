import React, { useState, useEffect } from 'react' 
import axios from 'axios'
import Book from './Book.js'
import AddBookForm from './AddBookForm'


function App() {
  const [book, setBook] = useState([])

  function getBook(){
    axios.get("/book")
      .then(res => setBook(res.data))
      .catch(err => console.log(err))
  } 

  function addBook(newBook){
    axios.post("/book", newBook)
      .then(res => {
        setBook(prevBook => [...prevBook, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteBook(bookId){
    axios.delete(`/book/${bookId}`)
      .then(res => {
        setBook(prevBook => prevBook.filter(book => book._id !== bookId))
      })
      .catch(err => console.log(err))
  }

  function editBook(updates,bookId){
    axios.put(`/book/${bookId}`, updates)
      .then(res => {
        setBook(prevBook => prevBook.map(book => book._id !== bookId ? book : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBook()
  }, [])  

  return (
    <div>
        <div className="bookContainer">
          <AddBookForm
            submit={addBook} 
            buttonText="Add Author"
          />
          { book.map(book => 
            <Book 
              {...book} 
              key={book.firstName}
              deleteBook={deleteBook}
              editBook={editBook}/>)
          }
        </div>
    </div>
  )
}

export default App
