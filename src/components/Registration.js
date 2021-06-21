import React, { useState } from 'react'
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import validator from 'validator'
import axios from 'axios'

function Registration({auth, handleAuth}) {

    const initialState = { name: '', email: '', password: '', password2: '' }
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState(initialState);
    const [redirect, setRedirect] = useState(false)

    const history = useHistory();
    const location = useLocation();

    const validForm = error => {
        let valid = true;
        Object.keys(formData).forEach(key => {
            if (formData[key].length == 0) {
                setError({ ...error, [key]: 'Cannot have empty field.' });
                valid = false;
            }
        });
        Object.values(error).forEach(val => val.length > 0 && (valid = false))
        return valid;
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        if (validForm(error)) {
            await axios.post('/api/user/register', formData).then(res => {
                //    history.push('/')
                // setRender(true)
                // setRedirect(true)
                handleAuth(true)
            }).catch(err => {
                console.log(err.response)
            })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'name':
                setError({ ...error, name: (value.length >= 5 ? '' : 'Must be at least 5 characters long') });
                break;

            case 'email':
                setError({ ...error, email: validator.isEmail(value) ? '' : 'Please enter a valid email address.' })
                break;

            case 'password':
                setError({ ...error, password: validator.isStrongPassword(value) ? '' : 'Password must be at least 8 characters long with one uppercase, number and symbol.' })
                break;
            case 'password2':
                setError({ ...error, password2: formData.password == value ? '' : 'Please make sure your password match' })

        }

        setFormData({ ...formData, [name]: value })
    }
    
        return (
            <div className="wraper flex flex-col justify-center items-center min-h-full">
                <Link to="/" className="bg-blue-500 text-white p-3 rounded-lg absolute top-10 left-10"> <FontAwesomeIcon icon="arrow-circle-left" /> Home</Link>
                <form className="w-full sm:w-11/12 lg:w-1/2 p-3 pt-0 shadow-md border-4 rounded-md border-solid border-yellow-600 flex flex-col" onSubmit={formSubmit}>
                    <h3 className="bg-yellow-600 py-4 rounded-b-md text-white text-lg text-center">Create A New Account</h3>
                    <label htmlFor="name" className="self-start">Name: </label>
                    <input id="name" name="name" className="registration-field" type="text" placeholder="Enter your name." onChange={handleChange} />
                    <span className="text-red-600">{error.name}</span>
                    <label htmlFor="email" className="block self-start">Email: </label>
                    <input id="email" name="email" className="registration-field" type="text" placeholder="Enter your emali." onChange={handleChange} />
                    <span className="text-red-600">{error.email}</span>
                    <label htmlFor="password" className="block self-start">Password: </label>
                    <input id="password" name="password" className="registration-field" type="password" placeholder="Enter your password." onChange={handleChange} />
                    <span className="text-red-600">{error.password}</span>
                    <label htmlFor="password2" className="block self-start">Confirm Password: </label>
                    <input id="password2" name="password2" className="registration-field" type="password" placeholder="Confirm your password." onChange={handleChange} />
                    <span className="text-red-600">{error.password2}</span>
                    <div className="submit flex justify-evenly mt-3">
                        <input className="bg-yellow-600 text-white p-2 px-3 rounded-lg transform active:scale-90" type="submit" value="Register" />
                        <Link to="/login" className="my-auto px-3">Already have an account? <span className="text-blue-500"> Sign In</span></Link>
                    </div>
                </form>
            </div>

        )
}

export default Registration
