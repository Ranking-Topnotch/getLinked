import React from 'react'
import Image12 from '../../image/cwok_casual_21 1.png'
import './faq.css'

const Faq = () => {
  return (
    <div className='faq_con'>
        <section className='faq_sub'>
            <h3>Frequently Ask <br />    
                <span>Question</span>
            </h3>
            <p>We got answers to the questions that you might
                want to ask about getlinked Hackathon 1.0</p>

            <h4>
                Can I work on a project I started before the hackathon?
                <span>+</span>
            </h4>

            <h4>
                What happens if I need help during the hackathon?
                <span>+</span>
            </h4>

            <h4>
                What happens if I don't have an idea for a project?
                <span>+</span>
            </h4>

            <h4>
                Can I join a team or do I have to come with one?
                <span>+</span>
            </h4>

            <h4>
                What happens after the hackathon ends
                <span>+</span>
            </h4>

            <h4>
                Can I work on a project I started before the hackathon?
                <span>+</span>
            </h4>

        </section>

        <section>
            <img src={Image12} alt='hackalton' />
        </section>
    </div>
  )
}

export default Faq