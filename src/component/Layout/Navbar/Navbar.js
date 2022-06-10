import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <div className={style.navbar}>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
