import React, { useEffect, useState } from 'react';
import Group from './Group';

function Main({ user }) {
  const [lastGames, setLastGames] = useState([]);

  useEffect(() => {
    const savedGames = JSON.parse(localStorage.getItem("lastGames")) || [];
    setLastGames(savedGames);
  }, []);

  return (
    <div className='all'>
      <div className='main'>
        <h1 className='h1 animate-slide-down'>
          مرحبا {user?.name} ♠️
        </h1>
        
        <h1>سجل نتائج مباريات الشدة مع صحابك</h1>

        <div className='alldiv'>
          <div className='button1'>
            <button className='button0'>
              <b>لعبة جديدة</b>
            </button>
          </div>

          <div className='button2'>
            <button 
              className='button00'
              onClick={() => window.location.href="/button"}
            >
              انشاء مجموعة
            </button>
          </div> 
        </div>
      </div>

      <div className="cards">
        {/* احصائيات */}
        <div className="card">
          <h3 id="nn">احصائياتي</h3>
          <div className="stats-navbar">
            <div className="stat">
              <p>الانتصارات</p>
              <span>12</span>
            </div>
            <div className="stat">
              <p>الخسائر</p>
              <span>5</span>
            </div>
            <div className="stat">
              <p>أعلى نتيجة</p>
              <span>320</span>
            </div>
            <div className="stat">
              <p>مجموع الألعاب</p>
              <span>17</span>
            </div>
          </div>
        </div>

        {/* آخر الألعاب */}
        <div className="card last-games-card">
          <h3>أخر الألعاب</h3>
          {lastGames.length === 0 && <p>لم يتم لعب أي لعبة بعد</p>}

          {lastGames.map((game, index) => (
            <div className="game-item" key={index}>
              <p className="winner-name">
                🏆 الفائز: {game.winner} ({game.winnerScore})
              </p>
              <ul className="player-scores">
                {game.players.map((p, i) => (
                  <li key={i}>{p.name}: {p.score}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* كارد أفضل اللاعبين */}
        <div className="card">
          <h3>أفضل اللعبين</h3>
          <p>هذا محتوى الكارد الثالث</p>
        </div>
      </div>


      <footer class="footer">
  <div class="footer-container">
    <div class="footer-col">
      <h1>الشِّدّة</h1>
      <h3>منصة لدعمك في فترات الشدّة وتقديم محتوى يخفف عليك ويقوّيك.</h3>
    </div>

    <div class="footer-col">
      <h4>روابط سريعة</h4>
      <ul>
        <li><a href="#"> <h2 >الرئيسية</h2>  </a></li>
        <li><a href="#"><h2>من نحن </h2> </a></li>
        <li><a href="#"><h2>المدونة</h2></a></li>
        <li><a href="#"> <h2>تواصل معنا </h2></a></li>
        <li><a href="#"> <h2>الاسئلة الشائعة</h2></a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h2>تواصل معنا</h2>
     <h2> <p>📧 info@devexa-it.com</p></h2>
      <h2><p>📱 962770245471</p></h2>
    </div>
  </div>

  <div class="footer-bottom">
<h2>© 2026 جميع الحقوق محفوظة – منصة الشِّدّة</h2>  </div>
</footer>
    </div>
  );
}

export default Main;
