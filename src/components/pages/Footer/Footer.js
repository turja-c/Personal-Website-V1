import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          
          <div className='social-icons'>

            <Link
              className='social-icon-link'
              to='//www.facebook.com/turja.chowdhury.77'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.instagram.com/turja.c/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
      
            <Link
              className='social-icon-link'
              to='//www.github.com/turja-c'
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.linkedin.com/in/turja-c/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
          <p className='footer-text'> Technologies used <br>
            </br>
          React, Bootstrap, Popup, </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;