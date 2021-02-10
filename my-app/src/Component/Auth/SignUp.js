import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import google from '../../img/google.png'
import kakao from '../../img/kakao.png'
import CloseIcon from '@material-ui/icons/Close';

export default function SignUp() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

 
    return (
        <div className="form SignIn__right">
                    <i className='close__btn btn__right'>
                        <Link to='/' className='SignIn_close' onClick={handleClick}>
                            <CloseIcon />
                        </Link>
                    </i>
                    <form action="#">
                        <h1>SIGN IN</h1>
                        <div className="middle">
                            <p className="email">Email</p>
                            <input type="text" className="email" placeholder= 'Email'/>
                            <p className="password">Password</p>
                            <input type="password" className="password" placeholder='Password'/>
                        </div>
                        <div className="botom">
                            <button className="bottom__btn">SIGN IN</button>
                        </div>
                        <div className="social">
                            <Link to='#' className="google" onClick={handleClick}>
                                <img src={google} alt=""/>
                                </Link>
                            <Link to='#' className="kakao" onClick={handleClick}>
                                <img src={kakao} alt="/"/>
                            </Link>
                        </div>    
                    </form>
                </div>
    )
}
