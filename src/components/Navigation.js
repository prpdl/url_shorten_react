import React from 'react'
import logo from '../images/nav_logo.png'
const Navigation = () => {
    return (
        <div className="min-w-full text-gray-300 absolute top-3 px-20">
            <div className="nav flex flex-wrap justify-between items-center font-mono">

                <img src={logo} className="nav-logo max-h-20" />
                <div className="right-nav flex items-center lg:order-2">
                    <button className="ml-5 text-yellow-600 border hidden sm:block border-solid border-yellow-600 p-3 hover:bg-yellow-600 hover:text-white rounded-lg transform active:scale-90 focus:outline-none">Contact Us</button>

                    <div className="toogle-button ml-3 block lg:hidden ">
                        <label htmlFor="menu-toggle" className="pointer-cursor"><svg className="fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                        <input className="hidden" type="checkbox" id="menu-toggle"/>
                    </div>
                </div>

                <div id="menu" className="hidden lg:flex-1 lg:flex items-center w-full lg:order-1 px-10 lg:py-0 lg:px-0">
                    <div className="left-menu lg:flex-1 lg:flex justify-evenly">
                        <a href="#" className="nav-link py-1 transform hover:text-yellow-600 hover:scale-125 block">Features</a>
                        <a href="#" className="nav-link py-1 transform hover:text-yellow-600 hover:scale-125 block">Pricing</a>
                        <a href="#" className="nav-link py-1 transform hover:text-yellow-600 hover:scale-125 block">Domains</a>
                    </div>

                    <div className="right-menu lg:flex-1 lg:flex justify-end">
                        <a href="#" className="nav-link py-1 transform hover:text-yellow-600 hover:scale-125 block lg:px-8">Sign up</a>
                        <a href="#" className="nav-link py-1 transform hover:text-yellow-600 hover:scale-125 block lg:px-8">Login</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navigation