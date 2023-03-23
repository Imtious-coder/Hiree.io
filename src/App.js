import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout/Layout.jsx';
import Career from './Pages/Career/Career';
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import Home from './Pages/Home/Index.jsx';
import Login from "./Pages/Login/Login";
import Recruiters from './Pages/Recruiters/Recruiters';
import SignUp from "./Pages/SignUp/SignUp";
import Success from './Pages/Success/Success';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/recruiters" element={<Recruiters />} />
            <Route path="/success" element={<Success />} />
            <Route path="/career" element={<Career />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/create-account' element={<CreateAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
