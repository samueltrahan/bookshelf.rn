import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'


const App = () => {
  const [books, setBooks] = useState([])

  const handleSearchSubmit = async (event, searchTerm) => {
    event.preventDefault();
    axios.get('/books', {
      params: {
        searchTerm: searchTerm
      },
    })
      .then((response) => {
        console.log(response)
        setBooks(response.data)
      })
      .catch((err) => console.log(err));
  }


  return (
    <Router>
    <NavBar />
    <SearchBar handleSearchSubmit={handleSearchSubmit}/>
    </Router>
  )
}

export default App