import React from 'react'
const Banner = ({image}) => {
    return (
        <div className="banner flex flex-wrap relative">
           <img className="min-w-full h-50v object-cover" src={image}/>
           <div className="banner-text absolute text-lg sm:text-2xl md:text-3xl lg:text-4xl font-mono font-extrabold text-yellow-600">
           <p className="p-4">Have Full Control Over Your Links</p>
           <p className="p-4">Paste The Link Below To Shortern It</p>
           </div>
        </div>
    )
}

export default Banner
{/* Things to do:
    1. Make the navigation button responsive
    2. Add table showing top visited URLs.
    3. Add User Auth
    Optional:
    4. Non signed users can shorten the link. 
    5. Signed Users get the list of their Shortened URLS.
    6. Signed Users can cusom create their Short URLs
*/}
