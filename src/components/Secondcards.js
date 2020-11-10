import React from 'react';
import SecondCarditem from './SecondCarditem';
import './Cards.css';
import './SecondCarditem.css';
import { Button } from './Button'

function Secondcards() {

    // const MODAL_STYLES = {
    //     position: 'fixed',
    //     top: '20%',
    //     left: '10%',
    //     // transform: 'translate( -50%)'
    //     padding: '50px',
    //     zIndex: 1000
    // }
    return (
    
        <div className='cards'>
            <h1 >EXPERIENCE</h1>
            
            <div className="cards__container">
                <div className="cards__wrapper">
                      
                    <ul className="cards__items">
                        <SecondCarditem 
                        src='images/1.png'
                       
                        text='                   '
                        path='/explore'
                        buttonLearnMore='Learn More'/>
                  
                        <SecondCarditem 
                        src='images/3.png'
                        text='                                        '
                        path='/explore'
                        buttonLearnMore='Learn More'/>
                        <SecondCarditem 
                        src='images/2.png'
          
                        path='/explore'
                        buttonLearnMore='Learn More'/>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Secondcards
