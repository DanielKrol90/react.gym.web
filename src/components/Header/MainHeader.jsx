import React from 'react'
import { Link } from 'react-router-dom'
import { mainheader } from '../../images';
import './MainHeader.css';

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#100Days of Work Out</h4>
          <h1> Join The Legends of The Fitness World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, illo? Minus totam eligendi adipisci aspernatur.
          </p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src="" alt="" />
          </div>

        </div>
      </div>

    </header>
  )
}

export default MainHeader