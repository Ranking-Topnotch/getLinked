import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineAlignLeft } from 'react-icons/ai' 
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './nav.css'

const Nav = () => {
  const [nav, setNav] = React.useState(true)

  function navFlip(){
    setNav(prev => !prev)
  }

  return (
    <nav className='nav' >
        <Link to='/'><h4>get<span>linked</span></h4></Link>
        <section className='navivation'>
            <AiOutlineAlignLeft onClick={navFlip} className={nav ? 'navbar' : 'open'} />
            <AiOutlineCloseCircle onClick={navFlip} className={nav ? 'closed' : 'navbar'}/> 
        </section>
        <div className={nav ? 'navbar_con_o' : 'navbar_con_c'}>
          
          <ul>
              <Link to='/'><li onClick={() => {navFlip()}}>Timeline</li></Link>
              <li onClick={() => {navFlip()}}>OverView</li>
              <li onClick={() => {navFlip()}}>FAQS</li>
              <Link to='contact'><li onClick={() => {navFlip()}}>Contact</li></Link>
          </ul>
          <Link to='register'><p onClick={() => {navFlip()}} className='register'>Register</p></Link>
        </div>

    </nav>
  )
}

export default Nav