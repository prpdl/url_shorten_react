import {useState} from 'react'
import axios from 'axios'
import './App.css';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import Navigation from './components/Navigation';

import bannerImage from './images/banner/tech_b_01.png'
import Shortern from './components/Shortern';


function App() {

 
  const[shortUrl, setShortUrl] = useState('')

  const shrink = (fullUrl) => {
     console.log('Sending Data...')
     const post = async () => {
         console.log('here')
         try {
             const result = await axios.post('http://localhost:3000/url/', 
          {fullUrl});

          console.log(result)
          if(result.data.message) {
              setShortUrl(result.data.getUrl.short)
              console.log(result.data.getUrl.short)
          }else{
              setShortUrl(result.data.newRecord.short)
              console.log(result.data.newRecord.short)
          }
         }catch(error) {
             console.log(error)
         }
     }

     post();
  }

  return (
    <div className="app">
      <Navigation/>
      <Banner image={bannerImage}/>
      <SearchBar handleClick={shrink}/>
      <Shortern shortUrl={shortUrl}/>
    </div>
  );
}

export default App;
