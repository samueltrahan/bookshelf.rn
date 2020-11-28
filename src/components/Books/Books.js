import React from 'react';
import './Books.css';

export default function Books({book}) {

  return (
    <div>
      {book.volumeInfo.title}
    </div>
  )
}
