

import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../src/static/js/home';
import Sprout from '../src/static/js/sprout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage/>}  />
        <Route path='/login'/>
        <Route path='/signup'/>
        <Route path='/home'  />
        <Route path='/sprout/create' />
        <Route path='/sprout' element = {<Sprout/>} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
