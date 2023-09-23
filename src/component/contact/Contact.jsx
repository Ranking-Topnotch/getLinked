import React from 'react'
import Image24 from '../../image/mdi_instagram.png'
import Image25 from '../../image/Vector (2).png'
import Image26 from '../../image/Vector-1.png'
import Image27 from '../../image/ri_linkedin-fill.png'

import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <section className='contact_con'>
            <h3>Get in touch</h3>

            <p>Contact <br /> Information</p>

            <p>27, ALara Street <br />
                Yaba 100012 <br />
                Lagos State
            </p>

            <p>Call Us: 07067988119</p>

            <p>we are open from Monday-Friday <br />
                08:00am - 05:00pm</p>

            <h3 className='contact_share'>Share on</h3>

            <div>
                <img src={Image24} alt='hackalton' />
                <img src={Image25} alt='hackalton' />
                <img src={Image26} alt='hackalton' />
                <img src={Image27} alt='hackalton' />
            </div>

        </section>

        <section className='contact_con_1'>
            <h3>Questions or need assistance?</h3>
            <h3>Let us know  about it!</h3>

            <div>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Mail' />
                <input type='text' placeholder='Message' height={300}/>
            </div>
      
        </section>
    </div>
  )
}

export default Contact