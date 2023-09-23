import React from 'react'
import Image1 from '../../image/Image1.png'
import Image2 from '../../image/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import Image3 from '../../image/Creative 1.png'
import Image4 from '../../image/chain-9365116-7621444.png'
import Image5 from '../../image/1f4a5.png'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <p className='hr'>Igniting a Revolution in HR Innovation</p>
      <div className='svg'>
        <svg width="255" height="17" viewBox="0 0 255 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5"/>
        </svg>
      </div>
      <div className='header_sub'>
        <section>
          <div className='image3_con'>
            <img className='image3' src={Image3} alt='hackoton' />
          </div>
          <p className='sec_head'>getlinked Tech</p>
          <p className='sec_head'>Hackathon <span>1.0</span><img className='image6' src={Image4} alt='hackalton' /><img className='image6' src={Image5} alt='hackalton' /></p>
          <p className='sec_1'>Participate in getlinked tech Hackathon 2023 stand 
            a chance to win a Big prize</p>

          <p className='registerr'>Register</p>

          <h3 className='time'>00<span>H</span>  00<span>M</span> 00<span>S</span></h3>
        </section>

        <section className='sub_1'>
          <img className='image1' src={Image1} alt='hackaton' />
          <img  className='image2' src={Image2} alt='hackaton' />
        </section>
      </div>
    </div>
  )
}

export default Header