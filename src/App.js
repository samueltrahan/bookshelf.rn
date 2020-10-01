import React, {useState} from 'react';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import axios from 'axios'


const App = () => {
  const [books, setBooks] = useState([])

  const handleSerachSubmit = (event, searchTerm) => {
    event.preventDefault();
    axios.get('/books', {
      params: {
        searchTerm: searchTerm
      }
      .then((response) => {
        setBooks(response.data)
        console.log(response.data)
      })
      .catch((err) => console.log(err))
    })
  }


  return (
    <>
    <NavBar />
    <SearchBar />
    </>
  )
}

export default App