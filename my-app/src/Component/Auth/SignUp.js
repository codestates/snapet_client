import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import google from '../../img/google.png'
import kakao from '../../img/kakao.png'
import useForm from '../Helper/useForm'
import Validation from '../Helper/Validation'
import './SignUp.css'


const SignUp = ({submitForm}) => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const { handleChange, values, handleSubmit, errors } = useForm(Validation, submitForm);


    return (
        <div className="form_container SignUp_container" >
            {/* <i className='close__btn btn__left'>
                        <Link to='/' className='SignUp_close' onClick={handleClick}>
                                    <CloseIcon />
                        </Link>
                    </i> */}
            <form action="#" className="form" onSubmit={handleSubmit}>
                <h1>SIGN UP</h1>
                <div className="middle">
                    <div className="inputs">
                        <div className="username">User name {errors.username && <p>{ errors.username}</p> }</div>
                        <input type="text" name='username' id='username' className="form-input" placeholder="User name" value={values.username} onChange={handleChange} />
                       </div>
                    <div className="inputs">
                        <div className="email">Email {errors.email && <p>{ errors.email} </p> }</div>
                        <input id='email' type="email" name='email' className="form-input" placeholder="Email" value={values.email} onChange={handleChange} />
                        </div>
                    <div className="inputs">
                        <div className="password">Password {errors.password && <p>{ errors.password}</p> }</div>
                        <input id='password1' type="password" name='password' className="form-input" placeholder='Password' value={values.password} onChange={handleChange} />
                        </div>
                    <div className="inputs">
                        <div className="password">Confirm Password{errors.password2 && <p>{ errors.password}</p> }</div>
                        <input id='password2' type="password" name='password2' className="form-input" placeholder='Confirm your password' value={values.password2} onChange={handleChange} />
                        </div>
                </div>
                <div className="botom">
                    <button className="bottom__btn">SIGN UP</button>
                </div>
                <div className="social">
                    <Link to='/google' className="google" onClick={handleClick}>
                        <img src={google} alt="" />
                    </Link>
                    <Link to='/kakao' className="kakao" onClick={handleClick}>
                        <img src={kakao} alt="" />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp;