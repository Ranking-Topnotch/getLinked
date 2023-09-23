import React from 'react'
import './award.css'
import Image13 from '../../image/9486889 1.png'
import Image14 from '../../image/silver_medal 1.png'
import Image15 from '../../image/gold_medal 1.png'
import Image16 from '../../image/bronze_medal 1.png'

const Award = () => {
  return (
    <div className='award'>
      <div className='award_1'>
            <h3 className='award_head'>
                Prizes and <br /> 
                <span>Rewards</span>
            </h3>
            <p className='winner'>Highligth of the prizes or reward for winners and Participants</p>
      </div>

        <section className='award_2'>
            <div>
                <img src={Image13} alt='Award' />
            </div>
            <section>
                <div className='award_con'>
                    <img src={Image14} alt='Award' />
                    <div className='silver'>
                        <h4>2nd</h4>
                        <p>Runner</p>
                        <h3>N300,000</h3>
                    </div>    
                </div>
                <div className='award_con'>
                    <img src={Image15} alt='Award' />
                    <div className='silver'>
                        <h4>1st</h4>
                        <p>Runner</p>
                        <h3>N400,000</h3>
                    </div>
                </div>
                <div className='award_con'>
                    <img src={Image16} alt='Award' />
                    <div className='silver'>
                        <h4>3rd</h4>
                        <p>Runner</p>
                        <h3>N150,000</h3>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}

export default Award