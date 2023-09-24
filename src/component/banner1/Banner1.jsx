import React from 'react'
import Image8 from '../../image/7450159 1.png'
import './banner1.css'

const Banner1 = () => {
  return (
    <div className='banner1'>
        <section>
            <p className='banner1_p'>
                Rules and <br />
                <span>Guidelines</span>
            </p>

            <p className='banner1_p1'>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a 
                design maverick, or a concept wizard, you'll have the chance to transform 
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
            </p>
        </section>

        <section className='banner1_img'>
            <img src={Image8} alt='hackalton' />
        </section>
    </div>
  )
}

export default Banner1