import React from 'react';
import HomePage from './pages/homePage';
import DashBoard from './pages/dashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="/" index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
