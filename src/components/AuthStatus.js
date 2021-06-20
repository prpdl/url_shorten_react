import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function AuthStatus({ auth, setAuth }) {

    const handleLogout = async () => {
        await axios.get('/api/user/logout').then(res => {
            setAuth(false);
            console.log(res)
        }).catch(err => {
            console.log(err);
        })
    }

    if (auth) {
        return (
            <a href="/" onClick={handleLogout} className={`nav-link py-1 lg:px-8 block transform hover:text-yellow-600 hover:scale-150 ${!auth ? " hidden" : ''}`}>Logout </a>
        )
    } else {
        return (
            <>
                <Link to="/registration" className="nav-link py-1 lg:px-8 block"><span className={`transform hover:text-yellow-600 hover:scale-150 inline-block ${auth ? " hidden" : ''}`}>Sign up</span></Link>
                <Link to="/login" className="nav-link py-1 lg:px-8 block"><span className={`transform hover:text-yellow-600 hover:scale-150 inline-block ${auth ? " hidden" : ''}`}>Login</span></Link>
            </>
        )
    }
}

export default AuthStatus
