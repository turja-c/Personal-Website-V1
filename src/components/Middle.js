import React, { Component } from 'react'
import { Button } from './Button'
import './Middle.css';
import '../App.css';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';
  import AOS from 'aos' ;
  import "aos/dist/aos.css";
  import TextTransition, { presets } from "react-text-transition";
//   import solobackground from './public/images/solobackground.png';

  const TEXTS = [
      "Hello!",
      "Bonjour!",
      "নমস্কার!",
      "Hola!",
      "নমস্কার!"
    ];
  
  const Middle = () => {

    const [index, setIndex] = React.useState(0);
 
    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 // every 3 seconds
      );
    });

    return (
        <>
        <div className='mid-container' style={{
         backgroundImage: `url(./images/solobackground.png)`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
      }}>
            
            <h1> Hello
            {/* <TextTransition
                    text={ TEXTS[index % TEXTS.length] }
                    springConfig={ presets.wobbly }
                />  */}
            </h1>
            <p>My name is Turja Chowdhury, a marketing enthuiset-turned Computer Science <br></br>& Business Analytics Student currently attending Ryerson University.</p>
            <br></br>
            <p>I aspire to continue learning about the constantly changing technology industry <br></br> and diversifying my skills to adapt to new and complex challenges</p>
            <br></br>
            {/* <img className='image'src='images/solo.png'/> */}
            {/* <div className='social-media-wrap'> */}
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
        </div>
        {/* </div> */}

      </>

    )
}
  

export default Middle;
