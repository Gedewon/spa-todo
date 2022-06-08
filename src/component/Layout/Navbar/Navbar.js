import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from "react-router-dom"
function Navbar() {
  return (
    <div className={style.navbar}>
      <ul>
            <li><NavLink to='/'>
            Home
            </NavLink>
            </li>
            <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar