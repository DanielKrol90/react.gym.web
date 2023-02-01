import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import './Navbar.css'
import { logo1 } from '../images/index'
import { links } from '../data';
import { FaBars } from 'react-icons/fa'


const Navbar = () => {
    const { isNavShowing, setIsNavShowing } = useState(false);
    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='logo'>
                    <img src={logo1} alt="Nav Logo" />
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show_nav' : 'hide__nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={name}>
                                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav__toggle-btn' onClick={() => setIsNavShowing(!isNavShowing)}>
                    <FaBars />
                </button>
            </div>
        </nav>
    )
}

export default Navbar