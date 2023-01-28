// import React from 'react';
// import { Link } from 'react-router-dom';
// import {ShoppingCart} from 'phosphor-react';
// import "./navbar.css"

// export const Navbar = () => {
//   return (
//     <div className='navbar'>
//    <div className="logoName"><h1>Shopy</h1></div>
//         <div className="links">
     
//         <Link to="/">Home</Link>
//         <Link to="/">About</Link>
//         <Link to="/">Catagories</Link>
//     <Link to="/">shop</Link>
//     <Link to="/cart">
//         <ShoppingCart size={32}/>
//     </Link>
//         </div>
//         </div>
//   )
// }
import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faSearch } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };


 

  return (
    <nav className="navbar">
        <div className="links">
      <Link to="/" className="logo">
      Shopy
      </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`menu${menuOpen ? ' open' : ' close'}`}>  
      
            <li>
          <a href="#" className="menu-item" >Home</a>
        </li>
        <li>
          <a href="#" className="menu-item" >About us</a>
        </li>
        <li>
          <a href="#" className="menu-item" >Shop</a>
        </li>
        <li>
          <a href="#" className="menu-item" >catagories</a>
        </li>
      </ul>
      <div className="links">
      <Link to="/">shop</Link>
    <Link to="/cart">
        <ShoppingCart size={32}/>
    </Link>

</div>
<button className="search-toggle" onClick={toggleSearch}>
        <FontAwesomeIcon icon={faSearch} /></button>
</nav>

  );
};


