import React, { useState, useRef, useEffect } from 'react';
import { navLinks, navLinksLogin } from '../data';
import { FaBars } from 'react-icons/fa';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // check the height of the links to adjust the height of the linksContainer
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect();
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight.height}px`;
    } else {
      linksContainerRef.current.style.height = `0`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {navLinks.map((link) => {
              const { id, url, name } = link;
              return (
                <li key={id}>
                  <a href={url}>{name}</a>
                </li>
              );
            })}
            <hr />
            <ul className='login-links'>
              {navLinksLogin.map((loginLink) => {
                const { id, url, name } = loginLink;
                return (
                  <li key={id}>
                    <a href={url}>{name}</a>
                  </li>
                );
              })}
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
