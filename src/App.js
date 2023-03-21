import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout/Layout.jsx';
import Career from './Pages/Career/Career';
import Home from './Pages/Home/index.jsx';
import Recruiters from './Pages/Recruiters/Recruiters';
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
