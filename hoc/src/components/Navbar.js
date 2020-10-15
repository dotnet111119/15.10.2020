import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke' Times</a>
        <ul className="right">
          <li><NavLink exact to='/' activeStyle={{ background: 'yellow',color:'black' }}>Home</NavLink></li>
          <li><NavLink to='/about' activeStyle={{ background: 'yellow',color:'black' }}>About</NavLink></li>
          <li><NavLink to='/contact' activeStyle={{ background: 'yellow',color:'black' }}>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
 export default Navbar;