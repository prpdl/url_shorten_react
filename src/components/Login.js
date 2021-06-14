import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ResetPassword from './ResetPassword';



const ShowError = ({ error }) => {
    const errorArr = Object.keys(error).map(key => error[key]);
    return (
        <>
            {errorArr.map((err, index) => {
                return <h3 key={index} className="text-red-600 mt-2">{err}</h3>
            })}
        </>
    )
}

function Login({ setToken }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const [passwordResetDialog, setPasswordResetDialog] = useState(false);

    const forgotPassword = () => {
        setPasswordResetDialog(true);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        axios.post('/api/user/login',
            {
                email: email,
                password: password
            })
            .then(res => {
                console.log(res.data)
                setToken(res.data.token)
            }).catch((err) => setError(err.response.data))
    }

    return (
        <div className="flex flex-col justify-center items-center h-100v w-full">
            <Link to="/" className="bg-blue-500 text-white p-3 rounded-lg absolute top-10 left-10"> <FontAwesomeIcon icon="arrow-circle-left" /> Home</Link>
            <form className="w-full sm:w-11/12 lg:w-1/2 p-3 pt-0 shadow-md border-4 rounded-md border-solid border-yellow-600 flex flex-col" onSubmit={loginHandler}>
                <h1 className="bg-yellow-600 py-4 rounded-b-md text-white text-lg text-center">Sign In To Your Account</h1>
                {Object.keys(error).length > 0 && (<ShowError error={error} />)}
                <div className="inputArea flex flex-col justify-between">
                    <label className="text-lg" htmlFor="email">Email</label>
                    <input className="login-input" type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputArea flex flex-col justify-between py-2">
                    <label className="text-lg" htmlFor="password">Password</label>
                    <input className="login-input" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="forgot-password flex justify-around">
                    <Link to="/registration" className="text-blue-600 focus:outline-none cursor-pointer">Create a new account</Link>
                    <a onClick={forgotPassword} className="text-blue-600 focus:outline-none cursor-pointer">Forgot Password?</a>
                </div>
                {/* <div className="py-3 flex justify-center">
                    <input type="checkbox" id="rememberMe" className="my-auto mr-1"/>
                    <label htmlFor="rememberMe">Remember Me</label>
                    
                </div> */}
                <div className="submit flex justify-center">
                    <button type="submit" className="bg-yellow-600 focus:outline-none text-white p-2 px-3 rounded-lg transform active:scale-90" type="submit"><FontAwesomeIcon icon="lock"/> Sign In</button>
                </div>
            </form>
            <div className={`passwordReset shadow-2xl absolute z-50 top-1/2 ${passwordResetDialog ? ' block' : ' hidden'}`}>
                    
            </div>
        </div>
    )
}

export default Login