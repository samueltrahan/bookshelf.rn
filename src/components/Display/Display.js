import React from 'react';
import './Display.css';

export default function Display({books}) {



  return (
    <div>
      {books.map((book) => 
      book.volumeInfo.title
      )}
    </div>
  )
}
