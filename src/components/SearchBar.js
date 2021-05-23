import React from 'react'
import {useState} from 'react'


const SearchBar = ({handleClick}) => {
    const[fullUrl, setFullUrl] = useState('')
   
    return (
        <div className="p-2 py-5 mt-3 bg-gray-100 flex justify-center">
            <input className="urlInput w-full lg:w-1/2 text-lg p-3 border-solid border-2 rounded-md focus:outline-none focus:ring ring-yellow-400 border-orange-300" placeholder="Enter URL" value={fullUrl} onChange={(e) => {setFullUrl(e.target.value)}} />
            <button className="p-3 ml-3 text-white focus:outline-none hover:ring ring-yellow-600 hover:bg-yellow-500 bg-yellow-500 transform active:scale-90 rounded-md flex items-center disabled:opacity-50" disabled={fullUrl.length<1} onClick={() => handleClick(fullUrl)}>
                <label>Shortern</label>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pl-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}

export default SearchBar
