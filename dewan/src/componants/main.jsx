import React, { useState } from 'react'
import Group from './Group'

function Main() {

  return (
    <div className='all'>
      <div className='main'>
        <h1 className='h1'>سجل نتائج الشّدة مع أصحابك</h1>

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

     
      {/* //rigesrter */}

      <div className="cards">
        
 
   
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

  

  <div className="card last-games-card">
  <h3>أخر الألعاب</h3>

  <div className="game-item">
    <img
      src="https://via.placeholder.com/80"
      alt="لعبة"
      className="game-image"
    />
    
    <div className="game-info">
      <p className="winner-name">الفائز: أحمد</p>
      <ul className="player-scores">
        <li>محمد: 50</li>
        <li>سارة: 40</li>
        <li>علي: 30</li>
      </ul>
    </div>
  </div>

</div>


  <div className="card">
    <h3>أفضل اللعبين</h3>
    <p>هذا محتوى الكارد الثالث</p>
  </div>
</div>
    </div>
  )
}

export default Main
