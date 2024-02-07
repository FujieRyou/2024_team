import React,{ useState, useEffect } from 'react';
import Login from './Login';
import LoggedIn from './loggedIn';
import { getTokenFromUrl } from './spotify';
import Search from './components/search';
import Navi from './components/nav';

// http://localhost:3000/?code=AQAiH0730PzhHZYIVmapIb_UNTTJWby9KeZn6dODK4F05m9wC3W9Nff7G8MmRXwR_lYVUcFwWvwv3t5vjOV7AXCbkN3hnwjr1T6gdJDp-czueMsyJBPT33VZ7X-COI-IbSsOWvIYelvPLsvbojfJTlv_149Ao2k437QSiCyrcQG37PG03cgmTAVpphBevO9CVVmc4lep

export default function Main() {
  const [token, setToken] = useState(null);
  const [currentPage, setCurrentPage] = useState('loggedin');
  const [animationClass, setAnimationClass] = useState('');
  const [musicWrap, setMusicWrap] = useState([]);
  useEffect(() => {
      const hash = getTokenFromUrl();
      console.log(hash)
      window.location.hash = "";
      const token = hash.access_token;
    if (token) {
      setToken(token)
    }
  }, [])
  
  const navigate = (page) => {
    setCurrentPage(page);
    setAnimationClass(page === 'loggedin' ? 'slide-in-left' : 'slide-in-right');
  };
    return (
    <div className='indexWrap'>
      { token ? (
        <div>
          <div>
            {currentPage === 'loggedin' && <LoggedIn />}
            {currentPage === 'search' && <Search token={token} />}
          </div>
          <Navi navigate={navigate} />
        </div>
      ) : <Login/>} 
    </div>
  );
}