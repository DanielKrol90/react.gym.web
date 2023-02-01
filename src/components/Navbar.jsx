import { React, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css'
import { logo1 } from '../images/index'
import { links } from '../data';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md'


const Navbar = () => {
    const  [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className='logo'>
                    <img src={logo1} alt="Nav Logo" />
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
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
                    {
                        isNavShowing ? <MdOutlineClose/> : <FaBars/>
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar