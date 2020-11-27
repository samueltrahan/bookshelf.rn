import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import SearchBar from './components/SearchBar/SearchBar';
import Display from './components/Display/Display';
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
        console.log(response.data.items)
        setBooks(response.data.items)
      })
      .catch((err) => console.log(err));
  }


  return (
    <Router>
    <NavBar />
    <SearchBar handleSearchSubmit={handleSearchSubmit}/>
    <Display books={books}/>
    </Router>
  )
}

export default App