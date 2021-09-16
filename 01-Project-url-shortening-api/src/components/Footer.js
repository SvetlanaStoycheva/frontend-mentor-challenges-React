import React from 'react';
import logo from '../images/logo-footer.svg';
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';

function Footer() {
  return (
    <>
      <section className='get-started'>
        <h2>Boost your links today </h2>
        <button className='hero-btn'>Get Started</button>
      </section>
      <footer>
        <div className='footer-section'>
          <img src={logo} alt='logo' />
          <div className='big-screen-grid'>
            <div className='footer-links-container'>
              <div className='footer-links'>
                <h4>Features</h4>
                <div className='features-links'>
                  <p>Link Shortening</p>
                  <p>Branded Links</p>
                  <p>Analytics</p>
                </div>
              </div>
              <div className='footer-links'>
                <h4>Resourses</h4>
                <div className='resourses-links'>
                  <p>Blog</p>
                  <p>Developers</p>
                  <p>Support</p>
                </div>
              </div>
              <div className='footer-links'>
                <h4>Features</h4>
                <div className='company-links'>
                  <p>About</p>
                  <p>Our Team</p>
                  <p>Careers</p>
                  <p>Contact</p>
                </div>
              </div>
            </div>
            <div className='footer-social-link-container'>
              <button type='button'>
                <FaFacebookSquare />
              </button>
              <button type='button'>
                <FaTwitter />
              </button>
              <button type='button'>
                <FaPinterest />
              </button>
              <button type='button'>
                <FaInstagram />
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className='attribution'>
        Challenge by
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noopener noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/SvetlanaStoycheva/frontend-mentor-challenges-React-JS/tree/main/01-Project-url-shortening-api'
        >
          Sweta
        </a>
        .
      </div>
    </>
  );
}

export default Footer;
