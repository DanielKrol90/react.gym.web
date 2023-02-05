import React from 'react';
import Card from '../../ui/Card'
import { SectionHeader } from '../index';
import { value } from '../../images/index';
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../../data'
import './Values.css'

const Values = () => {
  return (
    <section className='values'>
        <div className='container values__container'>
            <div className='values__left'>
                <img src={value} alt="Values" />
            </div>
        
        <div className='values__right'>
            <SectionHeader icon={<GiCutDiamond/>} title="Values" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequatur esse fugiat earum id accusantium.
            </p>
            <div className='values__wrapper'>
                {
                values.map(({id, icon, title, desc}) => {
                    return (
                        <Card className="values__value" key={id} >
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                        </Card>
                        )     
                    })
                }
            </div>
            </div>
        </div>
    </section>
  )
}

export default Values