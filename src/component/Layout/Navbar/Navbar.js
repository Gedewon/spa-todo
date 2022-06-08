import React from 'react'
import style from './Navbar.module.css'
function Navbar() {
  return (
    <div className={style.navbar}>
      <ul>
            <li>Home</li>
            <li>About</li>
      </ul>
    </div>
  )
}

export default Navbar