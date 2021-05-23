import React from 'react'
const Banner = ({image}) => {
    return (
        <div className="banner flex flex-wrap">
           <img className="min-w-full max-h-96 object-cover" src={image}/>
           <div className="banner-text absolute left-20 top-24 sm:top-40 sm:left-40 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono text-yellow-600 flex-shrink">
           <p>Have Full Control Over Your Links</p>
           <p>Paste The Link Below To Shortern It</p>
           </div>
           
        </div>
    )
}

export default Banner
