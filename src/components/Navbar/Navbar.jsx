import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    
  return (
<nav className="neon-navbar">
  <div className="logo">COSMObites</div>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Arena</a></li>
    <li><a href="#">Gladiators</a></li>
    <li><a href="#">Battle</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div className="menu-toggle">
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>
  )
}

export default Navbar