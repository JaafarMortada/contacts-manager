import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';

import './App.css';
import Signin from './signin-signup/signin';
import Signup from './signin-signup/signup';
import Home from './home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
