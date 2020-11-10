import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup'
import './Carditem.css';
// import { Button } from './Button'
import { Button } from 'react-bootstrap';
import 'reactjs-popup/dist/index.css';
import { FaGithub } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';


function SecondCarditem(props) {
    const [state,setState]=useState(false);
    let url="";

    return (
        <>
         <li className='cards__item'>
            <div className='cards__item__link'>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt='Travel Image' className='cards__item__img'/>
                </figure>
                    <Popup className="cards__item__link" trigger={<Button variant="primary">{props.buttonLearnMore}</Button>} modal>
                        <div>{props.popup}</div>
                    </Popup>
            
                    
                <div className="cards__item__info">
                    <h5 className="cards__item__text"> {props.text} </h5>
                    <div className='hero-btns'>
           
                    </div>
                </div>
                
            </div>
            
            
        </li>
        </>
    )
}

export default SecondCarditem
