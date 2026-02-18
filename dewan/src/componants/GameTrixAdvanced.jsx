import React, { useState, useEffect } from "react";

export default function GameTrixAdvanced() {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  const [winner, setWinner] = useState(null);

  const rounds = ["Hearts", "King of Hearts", "Queens", "Tricks", "Trix"];

  // استرجاع البيانات من localStorage عند فتح الصفحة
  useEffect(() => {
    const savedPlayers = JSON.parse(localStorage.getItem("trixAdvancedPlayers"));
    if (Array.isArray(savedPlayers)) {
      setPlayers(savedPlayers);
      calculateWinner(savedPlayers);
    }
  }, []);

  // حفظ اللاعبين تلقائيًا عند أي تعديل وحساب الفائز
  useEffect(() => {
    localStorage.setItem("trixAdvancedPlayers", JSON.stringify(players));
    calculateWinner(players);
  }, [players]);

  // إضافة لاعب جديد
  const handleAdd = (e) => {
    e.preventDefault();
    if (!name) return;
    if (players.length >= 4) {
      alert("الحد الأقصى 4 لاعبين فقط");
      return;
    }
    const newPlayer = { 
      id: Date.now(), 
      name, 
      scores: rounds.reduce((acc, r) => ({ ...acc, [r]: 0 }), {}), // نقاط لكل جولة
      total: 0
    };
    setPlayers([...players, newPlayer]);
    setName("");
  };

  // حذف لاعب
  const handleDelete = (id) => {
    setPlayers(players.filter(p => p.id !== id));
  };

  // إعادة تعيين اللعبة
  const handleReset = () => {
    setPlayers([]);
    setWinner(null);
    localStorage.removeItem("trixAdvancedPlayers");
  };

  // تحديث النقاط لكل جولة
  const handleAddScore = (id, round, scoreValue) => {
    const value = parseInt(scoreValue);
    if (isNaN(value)) return;

    const updatedPlayers = players.map(p => {
      if (p.id === id) {
        const newScores = { ...p.scores, [round]: p.scores[round] + value };
        return { ...p, scores: newScores, total: Object.values(newScores).reduce((a,b)=>a+b,0) };
      }
      return p;
    });

    setPlayers(updatedPlayers);
    localStorage.setItem("trixAdvancedPlayers", JSON.stringify(updatedPlayers));
  };

  // حساب الفائز: اللاعب صاحب أقل نقاط بعد انتهاء كل الجولات
  const calculateWinner = (playersList) => {
    if (playersList.length === 0) return;
    // فقط بعد انتهاء كل الجولات
    const finished = playersList.every(p => rounds.every(r => p.scores[r] !== null));
    if (!finished) {
      setWinner(null);
      return;
    }

    const minPlayer = playersList.reduce((prev, curr) => (curr.total < prev.total ? curr : prev), playersList[0]);
    setWinner({ name: minPlayer.name, total: minPlayer.total });
  };

  return (
    <div className="game-container">
      <div className="game-card">
        <h2>تسجيل نتائج لعبة التريكس</h2>
        <p>الفائز هو اللاعب صاحب أقل مجموع نقاط بعد انتهاء جميع الجولات</p>

        {/* إضافة لاعب جديد */}
        <form onSubmit={handleAdd} className="add-player-form">
          <input
            type="text"
            placeholder="ادخل اسم اللاعب"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button type="submit" className="btn add-btn">إضافة لاعب</button>
        </form>

        <div className="notebook">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>الاسم</th>
                {rounds.map(r => <th key={r}>{r}</th>)}
                <th>المجموع</th>
                <th>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p, i) => (
                <tr key={p.id}>
                  <td>{i+1}</td>
                  <td>{p.name}</td>
                  {rounds.map(r => (
                    <td key={r}>
                      <span>{p.scores[r]}</span>
                      <input
                        type="number"
                        placeholder="+"
                        onKeyDown={e => {
                          if(e.key === "Enter") {
                            handleAddScore(p.id, r, e.target.value);
                            e.target.value = "";
                          }
                        }}
                      />
                    </td>
                  ))}
                  <td>{p.total}</td>
                  <td>
                    <button className="btn delete-btn" onClick={() => handleDelete(p.id)}>حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button onClick={() => window.location.href='/button'}>العودة</button>
        <button className="btn reset-btn" onClick={handleReset}>إعادة تعيين</button>

        {winner ? (
          <div className="winner">
            🏆 الفائز: {winner.name} (المجموع: {winner.total})
          </div>
        ) : (
          <div className="winner">اللعبة مستمرة، لم تنتهِ جميع الجولات بعد</div>
        )}
      </div>
    </div>
  );
}
