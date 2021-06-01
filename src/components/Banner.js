import React from 'react'
const Banner = ({image}) => {
    return (
        <div className="banner min-w-full rounded-lg">
           <img className="object-contain w-full lg:rounded-lg lg:rounded-t-none" src={image}/>
           <div className="banner-text absolute left-56 top-28 sm:top-40 sm:left-56 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono text-yellow-600 flex-shrink">
           <p>Have Full Control Over Your Links</p>
           <p>Paste The Link Below To Shorten It</p>
           </div>          
        </div>
    )
}

export default Banner
