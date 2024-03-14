// import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminSignIn from './pages/AdminSignIn';
import Listing from './pages/Listing'
import UserProfile from './pages/UserProfile';
import UserPrivateRoute from './pages/UserPrivateRoute';
import AdminPrivateRoute from './pages/AdminPrivateRoute';
import AdminDetail from './pages/AdminDetail';
import AddRoom from './pages/AddRoom';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/adminsignin" element={<AdminSignIn />} />
          <Route path="/" element={<Home />} />


          {/* User Private Route  */}
          <Route element={<UserPrivateRoute />}>
            <Route path="/userprofile" element={<UserProfile />} />
          </Route >
          {/* Admin Private Routes  */}
          <Route element={<AdminPrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/admindetail" element={<AdminDetail />} />
            <Route path="/addRoom" element={<AddRoom />} />
          </Route >


        </Routes>
      </BrowserRouter>

    </div>
  )
}
