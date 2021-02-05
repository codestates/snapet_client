import React from 'react';
import { Button, button } from './Button';
import { Link } from "react-router-dom";
import './Main.css';

import background from '../img/background.png';
import botPolygon from '../img/logo_removed.png';
import topPolygon from '../img/logo_removed.png';
import circle from '../img/logo_removed.png';
import centrePolygon from '../img/logo_removed.png';



function Main({
    lightBg, bottomLine,bottomLine2, lightText, lightTextDesc, headline, headline2, description, buttonLabel,buttonLabel2, img, alt, imgStart

}) {
    return (
        
        <>
            <div  className={'home__main-section'} >
                <div className='container' >
                
                    <div
                        className='row home__main-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}>



                        {/* ---------- !!  dev 1 : img  ---------- !! */}
                        <div className='col'>
                            <div className='home__main-img-wrapper'>
                                <img src={img} alt={alt} className='home__main-img' />
                            </div>
                        </div>
                        {/* ---------- !!  dev 1 : img  ---------- !! */}



                        {/* ---------- !!  dev 2 : text  ---------- !! */}
                        <div className='col'>
                            <div className='home__main-text-wrapper'>
                                
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline }<br/>{headline2}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__main-subtitle'
                                            : 'home__main-subtitle dark'
                                    }
                                >
                                    {description}
                                </p>
                                <Link to='/dropimg'>
                                    <Button buttonSize='btn--wide' buttonColor='mainButton'>
                                        {buttonLabel}<br/>{buttonLabel2}
                                    </Button>
                                </Link>
                                <div className='bottom-line'>{bottomLine}<br />{bottomLine2}</div>
                                
                            </div>
                        </div>
                        {/* ---------- !!  dev 3 : text  ---------- !! */}



                    </div>
                </div>
            </div>
        </>
    );
}

export default Main
