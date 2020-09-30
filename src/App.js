import React, {useState} from 'react';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'


const App = () => {
  const [books, setBooks] = useState([])


  return (
    <>
    <NavBar />
    <SearchBar />
    </>
  )
}

export default App