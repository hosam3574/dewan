import './App.css'
import './css/nav.css'
import './css/main.css'
import "./css/Regester.css"
import "./css/group.css"
import "./css/GameHend.css"

import Navebar from './componants/navebar'
import Main from './componants/main'
import Group from './componants/Group'
import GameHend from './componants/GameHend'
import Register from './pages/Register'
import Login from './pages/Login'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null); // إذا null → غير مسجل دخول

  return (
    <Router>
      {/* Navbar يظهر فقط بعد تسجيل الدخول */}
      {user && <Navebar />}

      <Routes>
      <Route 
  path="/" 
  element={user ? <Main /> : <Login setUser={setUser} />} 
/>

        {/* الصفحات الآن بدون حماية */}
        <Route path="/" element={<Main />} />
        <Route path="/button" element={<Group />} />
        <Route path="/game-hend" element={<GameHend />} />

        {/* صفحات تسجيل الدخول والتسجيل */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
    </Router>
  )
}

export default App
