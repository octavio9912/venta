import React from 'react';
import './footer.css';
import { FaInstagramSquare, FaTwitterSquare, FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="GDL">
          <h5>GDL Shop</h5>
        </div>

        <div className="explore">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="services">
          <h4>Services</h4>
          <ul>
            <li>Web Design</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Social Management</li>
          </ul>
        </div>

        <div className="projects">
          <h4>Projects</h4>
          <ul>
            <li>Recent Products</li>
            <li>Explore Our Work</li>
            <li>Customer Testimonials</li>
            <li>Featured</li>
          </ul>
        </div>
      </div>

      <div className="socials">
        <ul>
          <li>
            <a href="#" className="social-link">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <FaInstagramSquare />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <FaTwitterSquare />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
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
