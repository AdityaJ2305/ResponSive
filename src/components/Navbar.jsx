import React from 'react'
import "../components/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>TECHSPOT</div>
        <div className='navlinks'>
      <ul>
        <li className="navitem">Home</li>
        <li className="navitem">About Us</li>
        <li className="navitem">Services</li>
        <li className="navitem">Contact Us</li> 
      </ul>
      </div>
    </div>
  )
}

export default Navbar
