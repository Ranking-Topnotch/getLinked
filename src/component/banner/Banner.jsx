import React from 'react'
import Image6 from '../../image/the big idea 1.png'
import Image7 from '../../image/arrow.png'
import './banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <section className='banner0'>
            <img src={Image6} alt='hackaton' />
            <img src={Image7} alt='hackaton' />
        </section>

        <section>
            <p className='banner_p'>
                Introduction to getlinked <br/>
                <span>tech Hackathon 1.0</span>
            </p>

            <p className='banner_p0'>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a 
                design maverick, or a concept wizard, you'll have the chance to transform 
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
            </p>
        </section>
    </div>
  )
}

export default Banner