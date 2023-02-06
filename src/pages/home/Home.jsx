import React from 'react'
import { MainHeader, Programs, Values, FAQs } from '../../components/index';

import './Home.css'

const Home = () => {
  return (
    <>
    <MainHeader />
    <Programs/>
    <Values />
    <FAQs />
    </>
  )
}

export default Home