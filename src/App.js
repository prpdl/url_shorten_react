import { useState } from 'react'
import axios from 'axios'
import './App.css';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import Navigation from './components/Navigation';

import bannerImage from './images/banner/tech_b_01.png'
import Shorten from './components/Shorten';
import Testarea from './components/Testarea';
import Footer from './components/Footer';


function App() {


  const [shortUrl, setShortUrl] = useState('')

  const shrink = (fullUrl) => {
    console.log('Sending Data...')
    const post = async () => {
      try {
        const result = await axios.post('http://localhost:3000/api/url/',
          { fullUrl });

        console.log(result)
        if (result.data.message) {
          setShortUrl(result.data.url.short)
          console.log(result.data.url.short)
        } else {
          setShortUrl(result.data.newRecord.short)
          console.log(result.data.newRecord.short)
        }
      } catch (error) {
        console.log(error)
      }
    }

    post();
  }

  return (
    <div className="app">
      <Navigation />
      <Banner image={bannerImage} />
      <div className="bg-gray-100 mt-5">
        <SearchBar handleClick={shrink} setShortUrl={setShortUrl} />
        <Shorten shortUrl={shortUrl} />
      </div>
      <Footer />
      {/* <Testarea/> */}
    </div>
  );
}

export default App;
