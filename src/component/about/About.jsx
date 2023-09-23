import React from 'react'
import Image24 from '../../image/mdi_instagram.png'
import Image25 from '../../image/Vector (2).png'
import Image26 from '../../image/Vector-1.png'
import Image27 from '../../image/ri_linkedin-fill.png'
import Image28 from '../../image/Group.png'
import Image29 from '../../image/Vector (3).png'

import './about.css'

const About = () => {
  return (
    <div className='about'>
        <section className='about_con'>
            <div className='about_sub_1'>
                <h3>get<span>linked</span></h3>
                <p>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information.</p>
            </div>

            <div className='about_sub_2'>
                <h3>Useful Links</h3>
                <ul>
                    <li>Overview</li>
                    <li>Timeline</li>
                    <li>FAQs</li>
                    <li>Register</li>
                </ul>
                <div className='about_svg'>
                    <span>Follow us</span>
                    <div>
                        <img src={Image24} alt='instagram' />

                        <img src={Image25} alt='twitter' />

                        <img src={Image26} alt='facebook' />

                        <img src={Image27} alt='linkden' />
                    </div>
                </div>
            </div>

            <div className='about_sub_3'>
                <h3>Contact Us</h3>
                <div>
                   <img src={Image28} alt='hackalton' />
                    <p>+234 679 81819</p>
                </div>
                <div>
                    <img src={Image29} alt='hackalton' />
                <p>27,Alara Street <br />
                    Yaba 100012 <br />
                    Lagos State</p>
                </div>
            </div>
        </section>

        <p className='footer'>Terms of Use <span></span>  Privacy Policy</p>
        <p className='foot'>All rights reserved. © getlinked Ltd.</p>
    </div>
  )
}

export default About