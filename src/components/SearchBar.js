import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
  return (
    <>
    <div className="ui form">
      <form className="field">
    <label>Search Books</label>
    <input id="input" className="input" type="text"></input>
      </form>
    </div>
    </>
  )
}

export default SearchBar;