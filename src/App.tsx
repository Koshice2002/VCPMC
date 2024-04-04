import './App.css';
import React, { useEffect } from 'react';
import Login from './pages/auth/Login';
import Error from './pages/auth/Error';
import BasicInfo from './pages/BasicInfo';
import ResetPassword from './pages/auth/ResetPassword';
import ForgotPassword from './pages/auth/ForgotPassword';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path='/login' element={<Login/>} />
        <Route path='/error' element={<Error/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />

        <Route path='/' element={<BasicInfo/>} />
      </Routes>
    </Router>
  )
}

export default App;
