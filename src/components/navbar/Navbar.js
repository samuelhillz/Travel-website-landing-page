import React, {useState} from 'react'
import {BsFacebook, BsInstagram, BsSearch, BsTwitter} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'
import './Navbar.css'
import {AiFillLinkedin, AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu } from 'react-icons/gi'

import {Link} from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggle = () => {
        setShowMenu(!showMenu)
    }
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>HILLARY.</h1>
            
        </div>
        <ul className='nav-menu'>

            <Link to='home'>  <li>Home</li> </Link>
            <Link to='destination' smooth={true} duration={300}>  <li>Destination</li> </Link>
            <Link to='search'>  <li>Books</li> </Link>
            <Link to='select'>  <li>Travels</li> </Link>
            <Link to='carousel'>  <li>Views</li> </Link>
               
                
        </ul>
            <div className="nav-icon">
                <BsSearch size={21} className='icon search'/>
                <BsFillPersonFill size={21} className='icon'/>

            </div>
        <div onClick={toggle} className="hamburger">
           {showMenu? (<AiOutlineClose size={25} />) :(
            <GiHamburgerMenu size={25} />)}

        </div>
        <div className={showMenu? 'mobile-menu active' :'mobile-menu'}>
            <div className="mobile-nav-menu">
                 <Link to='home'>  <li>Home</li> </Link>
            <Link to='destination' smooth={true} duration={300}>  <li>Destination</li> </Link>
            <Link to='search'>  <li>Books</li> </Link>
            <Link to='select'>  <li>Travels</li> </Link>
            <Link to='carousel'>  <li>Views</li> </Link>

            </div>
            <div className="mobile-nav-icons">
                <div className="mobile-icon">
                   <button className='btn1'>Search</button> 
                   <button className='btn2'>Account</button> 
                

                </div>
                <div className="social-icons">
                    <BsFacebook size={25} className='icon'/>
                    <BsTwitter size={25} className='icon'/>
                    <BsInstagram size={25} className='icon'/>
                    <AiFillLinkedin size={25} className='icon'/>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar