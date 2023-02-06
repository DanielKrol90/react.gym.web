import React from 'react'
import { MainHeader, Programs, Values, FAQs, Testimonials } from '../../components/index';

import './Home.css'

const Home = () => {
  return (
    <>
    <MainHeader />
    <Programs/>
    <Values />
    <FAQs />
    <Testimonials />
    </>
  )
}

export default Home