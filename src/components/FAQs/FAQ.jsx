import React from 'react';
import { AiOutlinePlus} from 'react-icons/ai';
import { AiOutlineMinus} from 'react-icons/ai';

const FAQ = ({question, answer}) => {
  return (
    <article className="faq">
        <div>
            <h4>{question}</h4>
            <button className="faq__icon">
                <AiOutlinePlus />
            </button>
        </div>
    </article>
  )
}

export default FAQ