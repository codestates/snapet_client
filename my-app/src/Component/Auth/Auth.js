import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import google from '../../img/google.png'
import kakao from '../../img/kakao.png'
import './Auth.css'


function Auth() {

 
    return (
        
        <div className ="auth">
            <div className="body" id="body">
                <SignUp />
                <SignIn >what </SignIn>
                {/* <div className="slide__body">
                    <div className="slides">
                        <div className="slide slide SignIn__left">
                            <p>Not a Member?</p>
                            <button className="slide__btn" id='signIn'  > Sign Up </button>
                        </div>
                        <div className="slide sldie SignUp__right">
                        <p>Already have an account?</p>
                            <button className="slide__btn" id='signUp'  > Sign In </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Auth
