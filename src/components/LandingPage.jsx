import React from 'react'
import ProfilePic from '../assets/bg.jpg'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
const LandingPage = () => {
    return (
        <div className="intro-main">
            <div className="intro-self">
                <h2><span className='im'>I'm</span> Amoah Alexander</h2>
                <br />
                <p>I am a JavaScript and Flutter developer. I specialize in building web and mobile applications that are both visually appealing and highly functional. My expertise in JavaScript and HTML/CSS allows me to create responsive and dynamic web experiences, while my knowledge of Flutter and the Dart programming language enables me to develop high-performance mobile apps for both iOS and Android platforms. I am always looking for new challenges and opportunities to improve my skills and deliver the best possible results for my clients. Please take a look at my portfolio to see some of my past projects and the technologies I have used.</p>
                <br />
                <div className="social-links">
                    <span>
                        <a href="https://twitter.com/kObi_plAy" target="_blank" rel="noopener noreferrer">
                            <FaTwitterSquare />
                        </a>
                    </span>
                    <span className='linkedin'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </span>
                    <span className='linkedin'>
                        <a href="https://github.com/Trinity6264" target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare />
                        </a>
                    </span>
                </div>
            </div>
            <div className="intro-pic">
                <img src={ProfilePic} alt="Profile Picture" />
            </div>
        </div>
    )
}

export default LandingPage