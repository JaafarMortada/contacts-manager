import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';

import './App.css';
import Signin from './signin-signup/signin';
import Signup from './signin-signup/signup';
import Navbar from './components/navbar/navbar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Navbar />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
