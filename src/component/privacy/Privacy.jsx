import React from 'react'
import Image22 from '../../image/Vector.png'
import Image23 from '../..//image/08 1.png'

import './privacy.css'

const Privacy = () => {
  return (
    <div className='privacy'>
        <section>
            <h3 className='privacy_head'>Privacy Policy and <br />
                <span>Terms</span></h3>
            
            <p className='privacy_p'>Last updated on September 12, 2023</p>

            <p className='privacy_p p_s'>Below are our privacy & policy, which outline a lot of goodies. 
                it’s our aim to always take of our participant</p>

            <div className='privacy_sub'>
                <p>
                    At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy.
                </p>
                <h4>Licensing Policy</h4>
                <p>Here are terms of our Standard License:</p>

                <div className='privacy_sec'>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
                        <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
                    </svg>
                    <p>The Standard License grants you a non-exclusive right to
                    navigate and register for our event</p>
                </div>

                <div className='privacy_sec'>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
                        <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
                    </svg>
                    <p>You are licensed to use the item available at any free source
                    sites, for your project developement</p>
                </div>
                
                <p className='privacy_read'>Read more</p>
            </div>
        </section>

        <section className='privacy_sec2'>
            <img className='privacy_img1' src={Image22} alt='hackalton' />
            <img src={Image23} alt='hackalton' />
        </section>
    </div>
  )
}

export default Privacy