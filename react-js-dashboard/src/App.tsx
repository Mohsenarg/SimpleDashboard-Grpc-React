import React from 'react';
import HomePage from './pages/homePage';
import DashBoard from './pages/dashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';


function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#73188f',
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="/" index element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
