

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../src/static/js/home';
import Sprout from '../src/static/js/sprout';
import CreateSprout from './static/js/utilities/create_sprout';
import AuthPage from './static/js/auth';
import Dashboard from './static/js/dashboard';
import AuthCheck from './static/js/utilities/AuthCheck';
import { useEffect, useState } from 'react';
import getCookie from './static/js/lib/authentication';
function App() {
  
  const [LoggedIn,setLoggedIn] = useState(false);
  useEffect(()=>{
      const checkAuthentication = () =>{
        const csrfToken = getCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/authenticate`, {
            method: 'GET',
            headers: {
                'X-CSRFToken': csrfToken,
            },
            credentials : 'include',
            })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Unauthorized access")
              }
              return response.json();
            })
            .then((data) => {
              setLoggedIn(true);
            })
            .catch((error) => {
              console.error('There was a problem with the authentication', error);
              setLoggedIn(false);
        });
      }
      checkAuthentication();
  });
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthPage setLoggedIn={setLoggedIn} />} />
        <Route path='/' element={LoggedIn ? <HomePage /> : <AuthPage setLoggedIn={setLoggedIn} />} />
        <Route path='/home' element={LoggedIn ? <HomePage /> : <AuthPage setLoggedIn={setLoggedIn} />} />
        <Route path='/sprout/create' element={LoggedIn ? <CreateSprout /> : <AuthPage setLoggedIn={setLoggedIn} />} />
        <Route path='/sprout/:sprout_id' element={LoggedIn ? <Sprout /> : <AuthPage setLoggedIn={setLoggedIn} />} />
        <Route path='/dashboard' element={LoggedIn ? <Sprout /> : <AuthPage setLoggedIn={setLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
