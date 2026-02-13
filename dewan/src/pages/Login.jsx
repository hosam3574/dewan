import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/api/auth/login", { email, password });
      
      // حفظ حالة المستخدم
      setUser(data);
      localStorage.setItem("token", data.token);
      navigate("/"); // يروح للصفحة الرئيسية بعد تسجيل الدخول
    } catch (err) {
      setMessage(err.response?.data?.message || "حدث خطأ");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate-slide-up">
        <h2>مرحبا بك!</h2>
        <p>سجل دخولك للمتابعة</p>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="كلمة المرور" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">تسجيل دخول</button>
        </form>

        {message && <p className="error">{message}</p>}

        <div className="divider"><span>أو</span></div>

        <Link to="/register">
          <button className="register-btn">إنشاء حساب جديد</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
