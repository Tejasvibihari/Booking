// import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminSignIn from './pages/AdminSignIn';
import Listing from './pages/Listing'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/adminsignin" element={<AdminSignIn />} />
          <Route path="/listing" element={<Listing />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
