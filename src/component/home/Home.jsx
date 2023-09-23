import React from 'react'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Banner1 from '../banner1/Banner1'
import Purpose from '../purpose/Purpose'
import Faq from '../faq/Faq'
import Time from '../time/Time'
import Award from '../award/Award'
import Partner from '../partner/Partner'
import Privacy from '../privacy/Privacy'
import About from '../about/About'

import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Banner />
        <Banner1 />
        <Purpose />
        <Faq />
        <Time />
        <Award />
        <Partner />
        <Privacy />
        <About />
    </div>
  )
}

export default Home