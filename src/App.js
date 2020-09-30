import React, {useState} from 'react';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'


const App = () => {
  const [books, setBooks] = useState([])

  const handleSerachSubmit = (event, searchTerm) => {
    event.preventDefault();
  }


  return (
    <>
    <NavBar />
    <SearchBar />
    </>
  )
}

export default App