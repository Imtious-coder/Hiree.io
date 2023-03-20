import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout/Layout.jsx';
import Success from './Layout/Success/Success';
import Home from './Pages/Home/index.jsx';
import Recruiters from './Pages/Recruiters/Recruiters';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/recruiters" element={<Recruiters />} />
            <Route path="/success" element={<Success />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
