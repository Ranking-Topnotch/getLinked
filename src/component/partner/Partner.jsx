import React from 'react'
import Image16 from '../../image/Liberty company logo white colour.png'
import Image17 from '../../image/wisper logo white.png'
import Image18 from '../../image/Liberty company logo white.png'
import Image19 from '../../image/Paybox.png'
import Image20 from '../../image/Winwise logo White colour 1.png'
import Image21 from '../../image/Vuzual Plus.png'

import './partner.css'

const Partner = () => {
  return (
    <div className='partner'>
        <h3>Partners and Sponsors</h3>
        <p>Getlinked Hackathon 1.0 is honored to have the following major 
            companies as its partners and sponsors</p>
        
        <section className='partner_con'>
            <div>
                <div className='partner_img'>
                    <img src={Image16} alt='hackalton' />
                </div>
                <div className='partner_lin'></div>
                <div className='partner_img'>
                    <img src={Image17} alt='hackalton' />
                </div>
            </div>
            
            <div>
                <div className='partner_line'></div>
                <div className='partner_line'></div>
            </div>

            <div>
                <div className='partner_img'>
                    <img src={Image18} alt='hackalton' />
                </div>
                <div className='partner_lin'></div>
                <div className='partner_img'>
                    <img src={Image19} alt='hackalton' />
                </div>
            </div>

            <div>
                <div className='partner_line'></div>
                <div className='partner_line'></div>
            </div>

            <div>
                <div className='partner_img'>
                    <img src={Image20} alt='hackalton' />
                </div>
                <div className='partner_lin'></div>
                <div className='partner_img'>
                    <img src={Image21} alt='hackalton' />
                </div>
            </div>

        </section>
    </div>
  )
}

export default Partner