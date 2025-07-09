import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Approvals from './Pages/Approval'
import SubmitLPM from './Pages/Submit'
import Login from './Pages/Login'
import Notifications from './Pages/Notification'

export default function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/submit" element={<SubmitLPM />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
      
   
    </Router>
  )
}
