import './App.css'
import './css/nav.css'
import './css/main.css'
import "./css/Regester.css"
import "./css/group.css"
import "./css/GameHend.css"
import "./css/footer.css"

import Navebar from './componants/navebar'
import Footer from './componants/footer'
import Main from './componants/main'
import Group from './componants/Group'
import GameHend from './componants/GameHend'
import GameBnakl from './componants/GameBnakl'
import GameTarneeb from './componants/GameTarneeb'
import GameTrixAdvanced from './componants/GameTrixAdvanced'
import Register from './pages/Register'
import Login from './pages/Login'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔑 يفحص إذا في token أول ما يفتح الموقع
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  // 🔑 دالة تسجيل الخروج
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  if (loading) return null;

  return (
    <Router>
      <div className="app-wrapper">

        {/* Navbar يظهر فقط إذا المستخدم مسجل دخول */}
        {user && <Navebar user={user} logout={logout} />}

        {/* المحتوى الرئيسي */}
        <div className="main-content">
          <Routes>
            <Route path="/start" element={<Navigate to={user ? "/" : "/login"} />} />
            <Route path="/" element={user ? <Main user={user} /> : <Navigate to="/login" />} />
            <Route path="/button" element={<Group />} />
            <Route path="/game-hend" element={<GameHend />} />
            <Route path="/game-bnakl" element={<GameBnakl />} />
            <Route path="/game-tarneeb" element={<GameTarneeb />} />
            <Route path="/game-trix-advanced" element={<GameTrixAdvanced />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser} />} />
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/start" />} />
          </Routes>
        </div>

        {/* Footer يظهر أسفل الصفحة دائما */}
        <Footer />

      </div>
    </Router>
  )
}

export default App;