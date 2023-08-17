import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src="/images/logo.png" alt="" height="40" width="121" />
      </div>
      <div className="navbar-content">
        <div><a href="">Extended Team</a></div>
        <div><a href="">Technology</a></div>
        <div><a href="">E-Commerce</a></div>
        <div><a href="">Mobility</a></div>
        <div><a href="">Testing</a></div>
        <div><a href="">Careers</a></div>
      </div>
    </div>
  )
}

export default Navbar