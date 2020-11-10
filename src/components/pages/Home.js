import React from 'react';
import '../../App.css';
import Middle from '../Middle';
import Cards from '../Cards';
import About from '../About'
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Data';
import Secondcards from '../Secondcards';
import Zoom from 'react-reveal/Zoom';

function Home() {
    return (
        <>
            <Zoom >
                <Middle />
            </Zoom>

            <Zoom >
                <Cards />
            </Zoom>
            
            <About  />
            <Secondcards />
        </>
    )
}

export default Home;