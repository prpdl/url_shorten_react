import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <div className="footer bg-gray-500 w-full">
            <div className="main-footer bg-footer sm:flex justify-evenly w-full">
                <div className="left-footer flex-1">
                    <div className="company p-5 text-white flex items-center flex-col">
                        <p className="font-bold text-yellow-500">Company</p>
                        <a href="#">About us</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact</a>
                        <a href="#">Join out team</a>
                    </div>
                </div>
                <div className="right-footer flex-1">
                    <div className="social p-5 flex flex-col items-center">
                        <p className="font-bold text-yellow-500">Social</p>
                        <div className="social-link-container flex justify-evenly">
                            <a className="p-2 text-blue-600" href="#">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </a>
                            <a className="p-2 text-twitter" href="#">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </a>
                            <a className="p-2 text-red-600" href="#">
                                <FontAwesomeIcon icon={['fab', 'youtube']} />
                            </a>
                        </div>

                        <div className="app-store-link sm:flex sm:space-x-2">
                            <a className="google-play-link block" href="#"><FontAwesomeIcon icon={['fab', 'google-play']}/> Google Play</a>
                            <a className="apple-store-link block mt-2 sm:mt-0" href="#"><FontAwesomeIcon icon={['fab', 'apple']}/> Apple Store</a>
   </div>
                    </div>
                </div>
            </div>

            <div className="sub-footer flex justify-evenly text-white">
                <div className="policies flex justify-start font-bold">
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                </div>
                <div className="copyright my-auto flex flex-nowrap font-bold">
                    <a href="#">ShortUp &copy; Copyright 2021</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
