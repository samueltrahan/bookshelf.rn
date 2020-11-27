import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import axios from 'axios'


const App = () => {
  const [books, setBooks] = useState([])

  const handleSearchSubmit = (event, searchTerm) => {
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
    <Router>
    <NavBar />
    <SearchBar handleSearchSubmit={handleSearchSubmit}/>
    </Router>
  )
}

export default App