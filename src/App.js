import { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowCircleLeft, faLock, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import bannerImage from './images/banner/tech_b_01.png'
import Shorten from './components/Shorten';
import Footer from './components/Footer';
import Login from './components/Login';
import Registration from './components/Registration';



library.add(fab, faCheckSquare, faCoffee, faArrowCircleLeft, faLock, faCaretUp, faCaretDown)

function App() {

  const [shortUrl, setShortUrl] = useState('')
  const [auth, setAuth] = useState(null);
  const[loading, setLoading] = useState(true, setTimeout(() => {
    setLoading(false);
  }, 2000));

  function handleAuth(value){
    setAuth(value)
  }

  useEffect(async () => {
    console.log(auth);
    try {
      const res = await axios.get('/verifyToken')
        if(res.data.sucess){
          setAuth(true);
          setLoading(false)
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
  if(loading)
    return null
    return (  
      <div className="app h-100v flex flex-col justify-between relative">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          <Route exact path="/">
            <Navigation auth={auth} setAuth={setAuth} />
            <Banner image={bannerImage} />
            <SearchBar handleClick={shrink} setShortUrl={setShortUrl} />
            <Shorten shortUrl={shortUrl} />
            <Footer />
          </Route>
          <Route path="/registration" render={() => (
            auth ? (<Redirect to="/"/>) : (<Registration auth={auth} handleAuth={handleAuth}/>)
           )} />
        </Switch>
      </BrowserRouter>
      {/* <Testarea/> */}
    </div>
  );
}


export default App;
