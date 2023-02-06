import {useState} from 'react'
import { SectionHeader } from '../index';
import Card from '../../ui/Card';
import { testimonials } from '../../data';

import { ImQuotesLeft } from 'react-icons/im'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

import './Testimonials.css'

const Testimonials = () => {
    const [index, setIndex ] = useState(0);
    const { name, quote, job, avatar} = testimonials[index];

  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHeader icon={<ImQuotesLeft />} title="Testimonials" className="testimonials__header"/>
            <Card className="testimonial">
                <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className='testimonial__quote'>{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className='testimonial__title'>{job}</small>
            </Card>
            <button className="testimonials__btn"><IoIosArrowDropleftCircle/></button>
            <button className="testimonials__btn"><IoIosArrowDroprightCircle/></button>
        </div>
    </section>
  )
}

export default Testimonials