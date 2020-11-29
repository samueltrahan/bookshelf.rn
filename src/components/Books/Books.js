import React from 'react';
import './Books.css';

export default function Books({book}) {

  return (
    <div className="books">
      {book.volumeInfo.title}<br />
      By: {book.volumeInfo.authors}
    </div>
  )
}
