import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <a className="links" href="/"><i className="fad fa-books fa-4x"></i></a>
      </div>
      <div className="nav-links">
        <Link className="links" to="/search">Search Books</Link>
        <Link className="links" to="/saved">Books</Link>
      </div>
    </div>
  )
}

export default NavBar