import React from 'react'
import "./footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className='footer-content'>
            <p>
                &copy; 2024 E-Learning Paltform. All rights reserved.<br/>Made with❤️ <a href='github'>Pragati Kumari</a>
            </p>
            <div className='social-links'>
                <a href="github"><FaGithub/></a>
                <a href="linkedin"><FaLinkedin/></a>
                <a href="instagram"><FaInstagramSquare/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer