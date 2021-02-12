import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import google from '../../img/google.png'
import kakao from '../../img/kakao.png'
import './Auth.css'
import cat1 from '../../img/cat1.png'
import cat2 from '../../img/cat2.png'
import FormSuccess from './FormSuccess'



const Auth = () => {
    const [showSlide, setShowSlide] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitFrom() {
        setIsSubmitted(true);
    }
    return (
        <div className="auth">
            <div className={showSlide ? "body right-slide-active" : "body"}>
                <SignUp />
                {/* {!isSubmitted ? (<SignUp submitForm={ submitFrom } />) : <FormSuccess/>} */}
                <SignIn />
                <div className="slide__body">
                    <div className="slides">
                        <div className="slide SignUp__left">
                        <div className="img1">
                            <img src={cat1} alt=""/>
                            </div>
                            <p>Already have an account?</p>
                            <button
                                className="slide__btn"
                                onClick={() => setShowSlide(false)}
                            >
                                Sign In
                </button>
                        </div>
                        <div className="slide SignIn__right">
                            <div className="img2">
                            <img src={cat2} alt=""/>
                            </div>
                            
                            <p>Not a Member?</p>
                            <button
                                className="slide__btn"
                                onClick={() => setShowSlide(true)}
                            >
                                Sign Up
                </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth
