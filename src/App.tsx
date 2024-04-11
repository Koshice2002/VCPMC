import React, { useEffect } from 'react';

import './App.css';
import Login from './pages/auth/Login';
import Error from './pages/auth/Error';
import BasicInfo from './pages/BasicInfo';
import ContractManage from './pages/ContractManage';
import ResetPassword from './pages/auth/ResetPassword';
import ForgotPassword from './pages/auth/ForgotPassword';
import AddExploitContract from './pages/AddExploitContract';
import EditExploitContract from './pages/EditExploitContract';
import InfoExploitContract from './pages/InfoExploitContract';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import AddAuthorizedContract from './pages/AddAuthorizedContract';
import InfoAuthorizedContract from './pages/InfoAuthorizedContract';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { authorizedContractFetchData } from './redux/slice/authorizedContractSlice';
import EditAuthorizedContract from './pages/EditAuthorizedContract';
import CopyExploitContract from './pages/CopyExploitContract';

const App = () => {
  const { currentUser } = useAppSelector(state => state.auth)
  
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authorizedContractFetchData())
  }, [currentUser, dispatch])  

  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path='/login' element={<Login/>} />
        <Route path='/error' element={<Error/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />

        <Route path='/profile' element={<BasicInfo/>} />
        <Route path='/contract-manage' element={<ContractManage/>} />
        <Route path='/add-exploit-contract' element={<AddExploitContract/>} />
        <Route path='/add-authorized-contract' element={<AddAuthorizedContract/>} />
        <Route path='/info-exploit-contract/:id' element={<InfoExploitContract/>} />
        <Route path='/edit-exploit-contract/:id' element={<EditExploitContract/>} />
        <Route path='/copy-exploit-contract/:id' element={<CopyExploitContract/>} />
        <Route path='/edit-authorized-contract/:id' element={<EditAuthorizedContract/>} />
        <Route path='/info-authorized-contract/:id' element={<InfoAuthorizedContract/>} />
        
      </Routes>
    </Router>
  )
}

export default App;
