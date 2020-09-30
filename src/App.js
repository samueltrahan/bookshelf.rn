import React, {useState} from 'react';
import SearchBar from './components/SearchBar'


const App = () => {
  const [books, setBooks] = useState([])


  return (
    <>
    <SearchBar />
    </>
  )
}

export default App