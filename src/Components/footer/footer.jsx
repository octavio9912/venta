import React from 'react'
import './Footer.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
        <div className="explore">
            <h4>Explore</h4>
            <ul>
                <li>
                        Home   
                </li>
                <li>
                        About
                </li>
                <li>
                        Contact
                </li>
            </ul>
        </div>

        <div className="services">
            <h4>Services</h4>
            <ul>
                <li>
                        Web design
                </li>
                <li>
                        UI/UX Design
                </li>
                <li>
                        Web Development
                </li>
                <li>
                        Social Management
                </li>
            </ul>
        </div>

        <div className="projects">
            <h4>Projects</h4>
            <ul>
                <li>
                        Recent Products
                </li>
                <li>
                        Explore Our Work
                </li>
                <li>
                        Customer Testimonials
                </li>
                <li>
                        Feautered
                </li>
            </ul>
        </div>
    </div>
    <div className="socials">
        <ul>
            <li>
                <a className='social-link'>
                    <i className="fa fa-instagram"></i>
                </a>
            </li>
            <li>
                <a to="#" className='social-link'>
                    <i className="fa fa-twitter"></i>
                </a>
            </li>
            <li>
                <a to="#" className='social-link'>
                    <i className="fa fa-facebook"></i>
                </a>
            </li>
            <li>
                <a to="#" className='social-link'>
                    <i className="fa fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a to="https://github.com/JosephJuska" target="_blank" className='social-link'>
                    <i className="fa fa-github"></i>
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