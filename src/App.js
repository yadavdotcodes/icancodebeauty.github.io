import React from 'react'
import Hero from './components/Hero'
import Blogs from './components/Blogs'
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
    </HashRouter>
  )
}

export default App