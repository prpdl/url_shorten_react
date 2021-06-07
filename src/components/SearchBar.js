import React from 'react'
import { useState } from 'react'


const SearchBar = ({ handleClick, setShortUrl }) => {

    function isURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return pattern.test(str);
    }

    const [fullUrl, setFullUrl] = useState('')
    const [error, setError] = useState(null)

    const submit = () => {
        setError(null);
        if(isURL(fullUrl)) {
            handleClick(fullUrl)
        }else{
            setError('Please Enter Correct URL')
            setShortUrl('')

        }
    }

    return (
        <div className="mt-3 bg-gray-100 p-5 lg:px-0 flex justify-center flex-col w-full m-auto">
            <div className="error text-red-600 animate-bounce lg:w-1/2 m-auto">
                {(error) ? <span><svg className="svg-error-icon inline-block h-5 w-5 stroke-current pr-1 pb-1 " viewBox="0 0 20 20">
                    <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                </svg>{error}</span> : ''}
            </div>
            <div className="url-input sm:flex justify-center w-full lg:w-1/2 m-auto focus-within:ring ring-yellow-500 rounded-md border border-solid border-yellow-400">
                <input className="urlInput w-full text-lg p-3 rounded-md rounded-r-none focus:outline-none  border-orange-300" placeholder="Enter URL" value={fullUrl} onChange={(e) => { setFullUrl(e.target.value); setError(null) }} />
                <button className="p-2 sm:p-3 mt-2 sm:mt-0 justify-center w-full sm:w-auto text-white focus:outline-non hover:bg-yellow-600 bg-yellow-500 focus:outline-none transform active:scale-90 rounded-md rounded-l-none flex items-center disabled:opacity-50" disabled={fullUrl.length < 1} onClick={submit}>
                    <label>Shortern</label>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pl-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="terms m-auto text-sm md:text-base">
                <p>By Clicking Shorten, you are agreeing to ShortUp's <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a></p>
            </div>
        </div>
    )
}

export default SearchBar
