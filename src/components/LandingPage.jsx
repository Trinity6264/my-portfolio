import React from 'react'
import ProfilePic from '../assets/bg.jpg'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
const LandingPage = () => {
    return (
        <div className="intro-main">
            <div className="intro-self">
                <h2><span className='im'>I'm</span> Amoah Alexander</h2>
                <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat veritatis unde aperiam ad voluptatem vitae aut quos. Suscipit reiciendis rerum architecto, magni consectetur aliquid consequuntur fugiat cum iusto? Odio voluptatibus ullam aliquam velit a, blanditiis fugiat corporis quo quaerat magni quod laborum illo. Quae dolor doloremque ducimus quibusdam rem nisi corrupti maiores error cumque, eveniet esse reprehenderit assumenda fugiat vero at voluptatum ipsum cupiditate delectus tempore in facere? Explicabo et qui blanditiis debitis. Quo eos aliquam quasi, fuga repellat sequi architecto maiores deleniti incidunt eveniet laudantium laboriosam, debitis ex id facere illo aut. Consectetur, maxime voluptatibus dolor amet reiciendis vitae!</p>
                <br />
                <div className="social-links">
                    <span>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaTwitterSquare />
                        </a>
                    </span>
                    <span className='linkedin'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </span>
                    <span className='linkedin'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
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