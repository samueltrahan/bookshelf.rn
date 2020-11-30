import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import SearchBar from './components/SearchBar/SearchBar';
import Display from './components/Display/Display';
import axios from 'axios';
import LandingPage from './pages/LandingPage/LandingPage';


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
    <Route exact path="/" render={() => 
    <LandingPage />
    }>

    </Route>
    <Route exact path="/search" render={() => 
    <div>
      <SearchBar handleSearchSubmit={handleSearchSubmit}/>
      <Display books={books}/>
    </div>
    }>
    </Route>
    </Router>
  )
}

export default App