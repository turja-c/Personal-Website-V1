import React from 'react';
import Carditem from './Carditem';
import './Cards.css';
import './Carditem.css';
import { Button } from 'react-bootstrap';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup'


function Cards() {
    return (
     <div className='background'>
        <div className='cards'>
            <h1>PORTFOLIO</h1>
            <p>The following projects are my most recent and featured projects. Click here for the full list of my portfolio.</p>
            
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                        src='images/5.png'
                        text='An Airbnb alternative for front line workers'
                        label='Soteria'
                        // href='//www.facebook.com/turja.chowdhury.77'
                        path='//www.github.com/AdityaGoyal1999/Soteria'
                        buttonLabel='Github'
                        buttonLearnMore='Learn More'
                        popup='The inspiration for this project comes from our shared desire to support the health care workers. Our primary objective through this platform is to provide an Airbnb alternative for the front line workers. Being in a high risk category, finding a place to temporarily stay to keep their families and community safe should not be another hassle for them. Secondly, this platform creates incentives for the landlords to have consistent renters. 
                        The healthcare workers are getting employed and paid, so they will definitely pay the rent. This creates a healthy supply and demand to be used in the practical atmosphere of this global pandemic. In short, COVID-19 has created a marketplace for secluded housing.
                        
                        That is why we bring you Soteria. Just like the name, Soteria, which signified the goddess of safety in the Greek mythology, we bring safety to medical workers. Not only does our web app protect medical workers but also to a substantial portion of the housing market from completely collapsing. '
                        /> 
                        
                        <Carditem 
                        src='images/6.png'
                        text='Quizlet alternative to test knowledge questions '
                        label='Quizo'
                        path='//www.github.com/turja-c/Quizo'
                        buttonLabel='Github'
                        buttonLearnMore='Learn More'
                        popup='Formulated Quizlet alternative using React, CSS/HTML, and Trivia API to generate a maximum of 50 questions on 20+ specific
                        categories, Implemented to-do-list feature to collect and delete infinite amount of user inputs for list items'/>
                    </ul>
                    <ul className="cards__items">
                        <Carditem 
                        src='images/8.png'
                        text='Canadian tourist guide for visitors'
                        label='Tourist Guide'
                        path='//www.github.com/turja-c/tourist-guide'
                        buttonLabel='Github'
                        buttonLearnMore='Learn More'
                        popup=''/>
                        <Carditem 
                        src='images/7.png'
                        text='Up-to-date cryptocurrency tracking'
                        label='Crypto-tracker'
                        path='//www.github.com/turja-c/crypto-tracker'
                        buttonLabel='Github'
                        buttonLearnMore='Learn More'
                        popup=''/>
                        <Carditem 
                        src='images/4.png'
                        text='Automated of legal documentation'
                        label='Refillr'
                        path='//www.devpost.com/software/refillr'
                        buttonLabel='Devpost'
                        buttonLearnMore='Learn More'
                        popup='Developed an automated filing and formatting process for legal documentation designed for legal professionals,
                        Constructed a front-end application using Python/Flask, CSS/HTML to implement UiPath automation,
                        Incorporated end-to-end user interface using Sketch and fabricated logo using Canva'/>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Cards
