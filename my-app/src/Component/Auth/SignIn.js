import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import google from '../../img/google.png'
import kakao from '../../img/kakao.png'
import CloseIcon from '@material-ui/icons/Close';

export default function SignIn() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="form SignUp__left">
                    <i className='close__btn btn__left'>
                        <Link to='/' className='SignUp_close' onClick={handleClick}>
                                    <CloseIcon />
                        </Link>
                    </i>
                    <form action="#">
                        <h1>SIGN UP</h1>
                        <div className="middle">
                            <p className="email">Name</p>
                            <input type="text" className="email empty" placeholder= "User Name" />
                            <p className="email">Email</p>
                            <input type="text" className="email empty" placeholder= "Email" />
                            <p className="password">Password</p>
                            <input type="password" className="password" placeholder='Password' />
                            <p className="password">Confirm Password</p>
                            <input type="password" className="password" placeholder='Password'/>
                        </div>
                        <div className="botom">
                            <button className="bottom__btn">SIGN UP</button>
                        </div>
                        <div className="social">
                            <Link to='#' className="google" onClick={handleClick}>
                                <img src={google} alt=""/>
                            </Link>
                            <Link to='#' className="kakao" onClick={handleClick}>
                                <img src={kakao} alt=""/>
                            </Link>
                        </div>    
                    </form>
                </div> 
    )
}
