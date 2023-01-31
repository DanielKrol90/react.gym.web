import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { logo1 } from '../images/index'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo'>
                <img src={logo1} alt="Nav Logo" />
            </Link>
            nav links
            nav buttons
        </div>
    </nav>
  )
}

export default Navbar