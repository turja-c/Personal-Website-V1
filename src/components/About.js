import React, { Component } from 'react'
// import { Button } from './Button'
import './About.css';
import '../App.css';
import { Link } from 'react-router-dom';

import { ReactComponent as YourSvg } from './person.svg';
import { Button } from 'react-bootstrap';

 
  const About = () => {

    

    return (
        <>
        {/* <div className='container' 
            style={{
         backgroundImage: `url(./images/background.png)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
      }}>
          <div className="second"> 
          <h1>ABOUT</h1>
          <div className="image">
          <YourSvg />
          </div>
       
          <div className="second-container">
              <p>sdfjaksdfjljsalfjlksjdfkjdslfdsfsf</p>
              <p>sdfjaksdfjljsalfjlksjdfkjdslfdsfsf</p>

              <Link className='cards__item__link' to='/' target='_blank'>
                        <Button variant="outline-primary">
                             sdkjfjsdfjsdf
                            </Button> 
                    </Link>

          </div>
          </div>
           
        </div> */}
        <div className='secondcontainer' style={{
         backgroundImage: `url(./images/background2.png)`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
      }}>
          
              <h1>ABOUT</h1>
              <div className="image">
                <YourSvg />
                </div>
              <div className="third">
                    <p>My name is Turja Chowdhury, a marketing enthuiset-turned Computer Science <br></br>& Business Analytics Student currently attending Ryerson University.</p>
                    <br></br>
                    <p>I aspire to continue learning about the constantly changing technology industry <br></br> and diversifying my skills to adapt to new and complex challenges</p>
                    <br></br>
                    <p>I aspire to continue learning about the constantly changing technology industry <br></br> and diversifying my skills to adapt to new and complex challenges</p>
                    
                    
                    <Link className='button' to='/' target='_blank'>
                                <Button variant="outline-primary">
                                    sdkjfjsdfjsdf
                                    </Button> 
                            </Link>
            </div>
            
            
        </div>


      </>

    )
}
  

export default About;
