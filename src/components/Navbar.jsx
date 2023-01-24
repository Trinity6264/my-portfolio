import React from 'react'
import '../style/Navbar_style.css'
import { Link } from 'react-router-dom'
import { FaRegHandSpock } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)


    const tapOpen = () => {
        setOpen(true);
    }
    const tapClose = () => {
        setOpen(false);
        console.log('gdghdshg');
    }

    return (
        <nav>
            <div className="logo-wrapper">
                <Link to={'/'}><FaRegHandSpock /></Link>
            </div>
            <div className="menu-wrapper">
                <AiOutlineMenu onClick={tapOpen} />
            </div>
            <ul>
                <li>
                    <a href="#intro-main" >Home</a>
                </li>
                <li>
                    <a href="#service" >Service</a>
                </li>
                <li>
                    <a href="#skills">Tech</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className='mobile-nav' style={{ left: isOpen ? '30%' : '150%' }}>
                <div className="close-wrapper">
                    <AiOutlineClose style={{ color: 'white',cursor: 'pointer', fontSize: '1.5em' }} onClick={tapClose}/>
                </div>
                <li>
                
                    <a href="#intro-main" onClick={tapClose}>Home</a>
                </li>
                <li>
                    <a href="#service" onClick={tapClose}>Service</a>
                </li>
                <li>
                    <a href="#skills" onClick={tapClose}>Skills</a>
                </li>
                <li>
                    <a href="#experience" onClick={tapClose}>Experience</a>
                </li>
                <li>
                    <a href="#contact" onClick={tapClose}>Contact</a>
                </li>
            </div>

        </nav>
    )
}

export default Navbar