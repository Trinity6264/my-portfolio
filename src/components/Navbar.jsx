import React from 'react'
import '../style/Navbar_style.css'
import { Link } from 'react-router-dom'
import {FaRegHandSpock} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav>
            <div className="logo-wrapper">
                <Link to={'/'}><FaRegHandSpock/></Link>
            </div>
            <div className="menu-wrapper">
                <AiOutlineMenu/>
            </div>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <a href="#service">Service</a>
                    {/* <Link to={'service'}>Service</Link> */}
                </li>
                <li>
                    <Link to={'#skills'}>Skills</Link>
                </li>
                <li>
                    <Link to={'#experience'}>Experience</Link>
                </li>
                <li>
                    <Link to={'#contact'}>Contact</Link>

                </li>
            </ul>
            <div className='mobile-nav'>
                <div className="close-wrapper">
                    <p>X</p>
                </div>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'#service'}>Service</Link>
                </li>
                <li>
                    <Link to={'#skills'}>Skills</Link>
                </li>
                <li>
                    <Link to={'#experience'}>Experience</Link>
                </li>
                <li>
                    <Link to={'#contact'}>Contact</Link>

                </li>
            </div>
           
        </nav>
    )
}

export default Navbar