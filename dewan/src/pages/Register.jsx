import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register({ setUser }) { // لازم نرسل setUser من App
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/api/auth/register", { name, email, password });
      setUser(data); // نعيّن المستخدم مباشرة بعد التسجيل
      localStorage.setItem("token", data.token); // نخزن التوكن
      navigate("/"); // يروح للصفحة الرئيسية
    } catch (err) {
      setMessage(err.response?.data?.message || "حدث خطأ");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate-slide-up">
        <h2>إنشاء حساب جديد</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="الاسم" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="كلمة المرور" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">تسجيل</button>
        </form>
        {message && <p className="error">{message}</p>}
      </div>
    </div>
  );
}

export default Register;
