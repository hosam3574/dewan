import './App.css'
import './css/nav.css'
import './css/main.css'
import "./css/Regester.css"
import "./css/group.css"
import "./css/GameHend.css"
import "./css/footer.css"

import Navebar from './componants/navebar'
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
  if (storedUser) {
    setUser(JSON.parse(storedUser)); // الاسم + التوكن
  }
  setLoading(false);
}, []);

  // 🔑 دالة تسجيل الخروج
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  if (loading) return null; // منع اللخبطة أثناء الفحص

  return (
    <Router>

      {/* Navbar يظهر فقط إذا المستخدم مسجل دخول */}
      {user && <Navebar user={user} logout={logout} />}

      <Routes>

        {/* توجيه تلقائي عند فتح الموقع */}
        <Route 
          path="/start" 
          element={<Navigate to={user ? "/" : "/login"} />} 
        />

        {/* الصفحة الرئيسية محمية */}
        <Route 
          path="/" 
          element={user ? <Main user={user} /> : <Navigate to="/login" />} 
        />

        {/* باقي الصفحات بدون حماية */}
        <Route path="/button" element={<Group />} />
        <Route path="/game-hend" element={<GameHend />} />
        <Route path="/game-bnakl" element={<GameBnakl />} />
        <Route path="/game-tarneeb" element={<GameTarneeb />} />
        <Route path="/game-trix-advanced" element={<GameTrixAdvanced  />} />
        {/* تسجيل الدخول */}
        <Route 
          path="/login" 
          element={user ? <Navigate to="/" /> : <Login setUser={setUser} />} 
        />

        {/* تسجيل حساب */}
        <Route 
          path="/register" 
          element={user ? <Navigate to="/" /> : <Register setUser={setUser} />} 
        />

        {/* أي رابط خاطئ يرجع للبداية */}
        <Route 
          path="*" 
          element={<Navigate to="/start" />} 
        />

      </Routes>
    </Router>
  )
}

export default App;
