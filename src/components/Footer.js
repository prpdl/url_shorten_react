import React from 'react'

const Footer = () => {
    return (
        <div className="footer bg-gray-500 absolute bottom-0 w-full">
            <div className="main-footer bg-footer w-full">
                <div className="left-footer">
            
                </div>
                <div className="right-footer">

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
