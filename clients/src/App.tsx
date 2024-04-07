import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import DashboardPage from './pages/home/Dashboard'



import Airlines from '../src/pages/admin/airlines/Airlines'
import SignUp from './pages/login/SignUp'
import AdminD from './pages/admin/adminDshbrd/AdminD'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={< DashboardPage />} />
      <Route path="/" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/AdminDashboard" element={<AdminD/>} />
      <Route path="/admin/airlines" element={<Airlines/>} />
      


     
     
     
    </Routes>
    </BrowserRouter>
 
  )
}

export default App