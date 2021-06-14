import { useState } from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowCircleLeft, faLock } from '@fortawesome/free-solid-svg-icons'

import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import bannerImage from './images/banner/tech_b_01.png'
import Shorten from './components/Shorten';
import Footer from './components/Footer';
import Login from './components/Login';
import Registration from './components/Registration';



library.add(fab, faCheckSquare, faCoffee, faArrowCircleLeft, faLock)

function App() {

 
  const [shortUrl, setShortUrl] = useState('')
  const [token, setToken] = useState(null)



  if(!token) {
   
  }

  const shrink = (fullUrl) => {
    const post = async () => {
      try {
        const result = await axios.post('/api/url/',
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
        throw error
      }
    }
    post();
  }

  return (
    <div className="app h-100v flex flex-col justify-between">
      <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login setToken={setToken}/>
        </Route>
        <Route exact path="/">
          <Navigation />
          <Banner image={bannerImage} />
          <SearchBar handleClick={shrink} setShortUrl={setShortUrl} />
          <Shorten shortUrl={shortUrl} />
          <Footer />
        </Route>
        <Route path="/registration" component={Registration}/>
      </Switch>
      </BrowserRouter>
      {/* <Testarea/> */}
    </div>
  );
}

export default App;
