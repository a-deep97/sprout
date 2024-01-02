

import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../src/static/js/home';
import Sprout from '../src/static/js/sprout';
import CreateSprout from '../src/static/js/create_sproute';
import AuthPage from './static/js/auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage/>}  />
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/home'  />
        <Route path='/sprout/create' element = {<CreateSprout/>} />
        <Route path='/sprout' element = {<Sprout/>} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
