import React from 'react'
import { MainHeader, Programs, Values, FAQs, Testimonials, Footer } from '../../components/index';

import './Home.css'

const Home = () => {
  return (
    <>
    <MainHeader />
    <Programs/>
    <Values />
    <FAQs />
    <Testimonials />
    <Footer />
    </>
  )
}

export default Home