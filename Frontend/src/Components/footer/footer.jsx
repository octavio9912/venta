import React from 'react'
import './footer.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
        <div className="GDL">
            <h5> GDL Shop </h5>
        </div>

        <div className="explore">
            <h4>Explore</h4>
            <ul>
                <li>  Home </li>
                <li>  bout </li>
                <li>  Contact </li>
            </ul>
        </div>

        <div className="services">
            <h4>Services</h4>
            <ul>
                <li> Web design  </li>
                <li> UI/UX Design </li>
                <li> Web Development </li>
                <li> Social Management </li>
            </ul>
        </div>

        <div className="projects">
            <h4>Projects</h4>
            <ul>
                <li> Recent Products </li>
                <li> Explore Our Work </li>
                <li> Customer Testimonials</li>
                <li> Feautered</li>
            </ul>
        </div>
    </div>
    <div className="socials">
        <ul>
            <li>
                <a to="#" className='social-link'>
                       <FaFacebookSquare />
                </a>
            </li>
            <li>
                <a to="#" className='social-link'>
                       <FaLinkedin />
                </a>
            </li>
            <li>
                <a to="#" className='social-link'>
                       <FaInstagramSquare />  
                </a>
            </li>
            <li>
                <a to="#" className='social-link'>
                       <FaTwitterSquare />
                </a>
            </li>
            <li>
                <a to="#" className='social-link'>
                       <FaGithubSquare />
                </a>
            </li>
        </ul>
    </div>
    <div className="copyright">
        <p>Copyright 2023</p>
    </div>
</footer>
  )
}

export default Footer