import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';

import './App.css';
import Signin from './signin-signup/signin';
import Signup from './signin-signup/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
