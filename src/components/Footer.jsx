import React from 'react'
import '../style/footer_style.css'
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="footer-first" id='contact'>
        <h3>Just say hi</h3>
        <p>I'm always open to discuss your project and talk about new things</p>
        <div className="footer-first-wrapper">
          <div className="follow">
            <p>Mail me at:</p>
            <h5>amoahtnt6@gmail.com</h5>
          </div>
          <div className="follow">
            <p>Follow me</p>
            <div className="social-links">
              <FaLinkedin />
              <FaGithubSquare />
              <FaTwitterSquare />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-second">
        <form action="#" method="post">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Your email address' />
          <input type="text" placeholder='Your budget (optional)' />
          <input type="text" placeholder='Your project description' className='description'/>
          <div className="btn-wrapper">
          <button>SUBMIT</button>
          </div>
        </form>
      </div>
    </footer>
  )
}

export default Footer