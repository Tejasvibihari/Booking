// import React from 'react'
import Header from './components/Header'
import Home from './components/pages/Home'
import Dashboard from './components/Dashboard';
import SignIn from './components/pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
