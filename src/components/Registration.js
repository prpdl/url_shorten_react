import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Registration() {

    const initialState = {name: '', email: '', password: ''}

    const [formData, setFormData] = useState(initialState);

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div className="wraper flex flex-col justify-center items-center min-h-full">
            <Link to="/" className="bg-blue-500 text-white p-3 rounded-lg absolute top-10 left-10"> <FontAwesomeIcon icon="arrow-circle-left" /> Home</Link>
            <form className="w-full sm:w-11/12 lg:w-1/2 p-3 pt-0 shadow-md border-4 rounded-md border-solid border-yellow-600 flex flex-col" onSubmit={formSubmit}>
                <h3 className="bg-yellow-600 py-4 rounded-b-md text-white text-lg text-center">Create A New Account</h3>
                <label htmlFor="name" className="block self-start">Name: </label>
                <input id="name" name="name" className="registration-field" type="text" placeholder="Enter your name." onChange={handleChange} />
                <label htmlFor="email" className="block self-start">Email: </label>
                <input id="email" name="email" className="registration-field" type="text" placeholder="Enter your emali." onChange={handleChange} />
                <label htmlFor="password" className="block self-start">Password: </label>
                <input id="password" name="password" className="registration-field" type="password" placeholder="Enter your password." onChange={handleChange} />
                <label htmlFor="password2" className="block self-start">Confirm Password: </label>
                <input id="password2" name="password2" className="registration-field" type="password" placeholder="Confirm your password." onChange={handleChange} />
                <div className="submit flex justify-evenly mt-3">
                    <input className="bg-yellow-600 text-white p-2 px-3 rounded-lg transform active:scale-90" type="submit" value="Register" />
                    <Link to="/login" className="my-auto px-3">Already have an account? <span className="text-blue-500"> Sign In</span></Link>
                </div>
            </form>
        </div>

    )
}

export default Registration
