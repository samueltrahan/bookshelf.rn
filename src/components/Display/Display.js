import React from 'react';
import './Display.css';
import Books from '../Books/Books';

export default function Display({books}) {



  return (
    <div>
      {books.map((book) => 
      <Books book={book}/>
      )}
    </div>
  )
}
