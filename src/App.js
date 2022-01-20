import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './PAGES/Homepage/Homepage.jsx'
import ProjectDetails from '../src/PAGES/projectDetails/ProjectDetails.jsx'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  )
}

export default App
