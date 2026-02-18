import React from 'react';
import { useNavigate } from "react-router-dom";

function Navebar({ user, logout }) {
  const navigate = useNavigate();

  // دالة تسجيل الخروج
  const handleLogout = () => {
    logout();             // يمسح حالة المستخدم في App.js
    navigate("/login");   // يرجع على صفحة تسجيل الدخول
  };

  return (
    <div>
      <div className='navbar'>

        {/* شعار الموقع */}
        <img
          id='photo1'
          src="https://vipjalsat.com/wp-content/uploads/2020/03/%D9%85%D9%86-%D9%87%D9%8A-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%AD%D9%82%D9%8A%D9%82%D9%8A%D8%A9-%D9%84%D9%85%D9%84%D9%88%D9%83-%D9%88%D8%B1%D9%82-%D8%A7%D9%84%D8%B4%D8%AF%D8%A9.png"
          alt="logo"
        />

        {/* اسم الموقع */}
        <p id='pargraph'>
          <span className="red">ديوان </span>
          <span className="white">الشدة</span>
        </p>

        {/* اسم المستخدم وزر تسجيل الخروج */}
        <div className='user-logout'>
          <button onClick={handleLogout}>تسجيل خروج</button>
        </div>

        {/* صورة البروفايل */}
        <div className="profile-container">
          <img
            className="profile-image"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="profile"
          />
        </div>

      </div>
    </div>
  );
}

export default Navebar;
