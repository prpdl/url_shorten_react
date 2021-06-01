import {useState} from 'react'
import axios from 'axios'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSort, faCaretDown} from '@fortawesome/free-solid-svg-icons'

import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import bannerImage from './images/banner/tech_b_01.png'
import Shorten from './components/Shorten';
import TopLinks from './components/TopLinks';
import TestArea from './components/TestArea';
import Footer from './components/Footer';

library.add(fab, faSort, faCaretDown)


function App() {

 
  const[shortUrl, setShortUrl] = useState('')

  const shrink = (fullUrl) => {
     console.log('Sending Data...')
     const post = async () => {
         console.log('here')
         try {
             const result = await axios.post('http://localhost:3000/api/url/', 
          {fullUrl});

          console.log(result)
          if(result.data.message) {
              setShortUrl(result.data.url.short)
              console.log(result.data.url.short)
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
    <div className="xl:container xl:mx-auto relative flex flex-col items-center">
      <Navigation/>
      <Banner image={bannerImage}/>
      <SearchBar handleClick={shrink}/>
      <Shorten shortUrl={shortUrl}/>
      <TopLinks/>
      <Footer/>
      {/* <TestArea/> */}
    </div>
  );
}

export default App;
