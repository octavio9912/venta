import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'
import { FaInstagramSquare, FaTwitterSquare, FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="GDL">
          <h5>JGL Shop</h5>
        </div>

        <div className="explore">
          <h4>Explore</h4>
          <ul>
            <li><Link className="nav-link" to="/Inicio" >Home</Link></li>
            <li><Link className="nav-link" to="/Contactos" >About</Link></li>
            <li><Link className="nav-link" to="/Contactos" >Contact</Link></li>
          </ul>
        </div>

        <div className="services">
          <h4>Services</h4>
          <ul>
            <li><Link className="nav-link" to="/Contactos" >Web Design</Link></li>
            <li><Link className="nav-link" to="/Contactos" >UI/UX Design</Link></li>
            <li><Link className="nav-link" to="/Contactos" >Web Development</Link></li>
            <li><Link className="nav-link" to="/Contactos" >Social Management</Link></li>
          </ul>
        </div>

        <div className="projects">
          <h4>Projects</h4>
          <ul>
            <li><Link className="nav-link" to="/Contactos" >Recent Products</Link></li>
            <li><Link className="nav-link" to="/Contactos" >Explore Our Work</Link></li>
            <li><Link className="nav-link" to="/Contactos" >Customer Testimonials</Link></li>
            <li><Link className="nav-link" to="/Contactos" >Featured</Link></li>
          </ul>
        </div>
      </div>

      <div className="socials">
        <ul>
          <li>
            <a  className="social-link">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a  className="social-link">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a  className="social-link">
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a  className="social-link">
              <FaTwitterSquare />
            </a>
          </li>
          <li>
            <a  className="social-link">
              <FaGithubSquare />
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>Copyright 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
