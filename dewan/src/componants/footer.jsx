// Footer.jsx
import React, { useState, useEffect } from "react";


export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // إذا وصلت لنهاية الصفحة
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight -2;
      setShow(bottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer ${show ? "visible" : ""}`}>
      <div className="footer-container">
        <div className="footer-col">
          <h1>الشِّدّة</h1>
          <h3>منصة لدعمك في فترات الشدّة وتقديم محتوى يخفف عليك ويقوّيك.</h3>
        </div>
        <div className="footer-col">
          <h4>روابط سريعة</h4>
          <ul>
            <li><a href="#">الرئيسية</a></li>
            <li><a href="#">من نحن</a></li>
            <li><a href="#">المدونة</a></li>
            <li><a href="#">تواصل معنا</a></li>
            <li><a href="#">الأسئلة الشائعة</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>تواصل معنا</h4>
          <p>📧 info@devexa-it.com</p>
          <p>📱 962770245471</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 جميع الحقوق محفوظة – منصة الشِّدّة
      </div>
    </footer>
  );
}