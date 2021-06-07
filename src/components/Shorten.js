import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react'

const Shorten = ({ shortUrl }) => {

    const copyUrl = () => {
        console.log('Copy Mate')
        navigator.clipboard.writeText(`http://localhost:3000/api/url/${shortUrl}`); 
        setCopy(true)
        setInterval(() => {
            setCopy(false);
        }, 10000)
    }
    
    const[isCopied, setCopy] = useState(false)
    const[shortenedUrl, setShortenedUrl] = useState('')

    useEffect(() => {
        setShortenedUrl(`http://localhost:3000/api/url/${shortUrl}`)
    })

    if (shortUrl.length > 0) {
        return (
            <div className="flex pb-10 relative bg-white lg:bg-gray-100 flex-col justify-center items-center text-blue-400">
                <p className="text-3xl text-yellow-500 font-bold pt-4">Your shortened URL</p>
                <div className="short-result bg-white p-5 rounded-lg shadow-md w-full lg:w-1/2 flex flex-col items-center">
                    <div className="copy-result flex w-full">
                        <input type="text" className="p-3 flex-1 border border-solid border-yellow-500 rounded-lg rounded-r-none outline-none" value={shortenedUrl} id="shortUrl" onChange={() => {setShortenedUrl(shortUrl); setCopy(false)}} />
                        <button className="px-2 text-white rounded-lg rounded-l-none bg-yellow-500 focus:outline-none transform active:scale-90" onClick={copyUrl}>{isCopied ? 'Copied!':'Copy URL'}</button>
                    </div>
                    <div className="qrcode flex flex-col items-center">
                        <QRCode className="mt-3" value={`http://localhost:3000/api/url/${shortUrl}`} />
                        <div className="qrInfo flex items-center py-1">
                            <svg width="24" className="fill-current text-yellow-500" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z" /></svg>
                            <span className="text-sm px-2">QR Code</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}


export default Shorten
