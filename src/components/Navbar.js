import React, {useState, useEffect} from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Button } from './Button.js';
import './Navbar.css';
// import { motion } from "framer-motion"

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    
    useEffect(() => {
        showButton();
    }
, []); 
    window.addEventListener('resize', showButton);

    
    return (
        <>
        <BrowserRouter>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu} path='/src/components/pages/Home.js'>
                        Turja Chowdhury 
                    </Link>
                    <div className='menu-icon' onClick={ handleClick }>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Cards' className='nav-links' onClick={closeMobileMenu}>
                                PORTFOLIO
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/About' className='nav-links' onClick={closeMobileMenu} >
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                                CONTACT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={
                                '//drive.google.com/file/d/14Z1uCecNAAPrUNo9q4PTIu-D_XmylPVc/view?usp=sharing'
                              } className='nav-links' target='_blank' onClick={closeMobileMenu}>
                                RESUME
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </BrowserRouter>
        </>
    );
}

export default Navbar;
