import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { logo1 } from '../images/index'
import { links } from '../data';
import { FaBars } from 'react-icons/fa'


const Navbar = () => {
    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='logo'>
                    <img src={logo1} alt="Nav Logo" />
                </Link>
                <ul className="nav__links">
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={name}>
                                    <NavLink to={path}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav__toggle-btn'>
                    <FaBars />
                </button>
            </div>
        </nav>
    )
}

export default Navbar