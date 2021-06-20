import { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
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
  const [token, setToken] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(async () => {
    try {
      const res = await axios.get('/verifyToken')
        if(res.data.sucess){
          setAuth(true);
        }
    } catch(error){
      console.log(error.response)
    }
  })

  const shrink = (fullUrl) => {
    const post = async () => {
      try {
        const result = await axios.post('/api/url/',
          { fullUrl });
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
    <div className="app h-100v flex flex-col justify-between relative">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login setToken={setToken} auth={auth} setAuth={setAuth} />
          </Route>
          <Route exact path="/">
            <Navigation auth={auth} setAuth={setAuth} />
            <Banner image={bannerImage} />
            <SearchBar handleClick={shrink} setShortUrl={setShortUrl} />
            <Shorten shortUrl={shortUrl} />
            <Footer />
          </Route>
          <Route path="/registration" render={() => (
              auth ? (<Redirect to="/"/>) : (<Registration/>)
          )
          } />
        </Switch>
      </BrowserRouter>
      {/* <Testarea/> */}
    </div>
  );
}

export default App;
