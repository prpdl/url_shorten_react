import React, { useState } from 'react'
import logo from '../images/nav_logo.png'
import AuthStatus from './AuthStatus'
const Navigation = ({auth, setAuth}) => {
    const [navToggle, setNavToggle] = useState(false)

    const toogleNav = () => {
        setNavToggle(!navToggle)
        setTimeout(() => setNavToggle(false), 10000)
    }

   
    return (
        <div className="min-w-full text-gray-300 absolute top-3 px-20 z-10">
            <div className="nav flex flex-wrap justify-between items-center font-mono">
                <img src={logo} className="nav-logo max-h-20" />
                <div className="right-nav flex items-center lg:order-2">
                    <button className="ml-5 text-yellow-600 border hidden sm:block border-solid border-yellow-600 p-3 hover:bg-yellow-600 hover:text-white rounded-lg transform active:scale-90 focus:outline-none">Contact Us</button>

                    <div className="toogle-button ml-3 block lg:hidden ">
                        <button className="focus:outline-none transform active:scale-90" onClick={toogleNav}>
                            <label htmlFor="menu-toggle" className="pointer-cursor"><svg className="fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                        </button>
                    </div>
                </div>

                <div id="menu" className={"p-2  bg-footer rounded-lg shadow-md lg:bg-none lg:flex-1 lg:flex items-center w-full lg:order-1" + (navToggle ? '':' hidden')}>
                    <div className="left-menu lg:flex-1 lg:flex-row flex flex-col items-center lg:justify-evenly">
                        <a href="#" className="nav-link py-1 block"><span className="transform hover:text-yellow-600 hover:scale-150 inline-block">Features</span></a>
                        <a href="#" className="nav-link py-1 block"><span className="transform hover:text-yellow-600 hover:scale-150 inline-block">Pricing</span></a>
                        <a href="#" className="nav-link py-1 block"><span className="transform hover:text-yellow-600 hover:scale-150 inline-block">Domains</span></a>
                    </div>

                    <div className="right-menu lg:flex-1 flex lg:flex-row lg:justify-end flex-col items-center relative">
                        <AuthStatus auth={auth} setAuth={setAuth}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
