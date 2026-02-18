import React, { useState, useEffect } from "react";

export default function GameaBnakl() {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  const [winner, setWinner] = useState(null);

  // استرجاع البيانات من localStorage عند فتح الصفحة
  useEffect(() => {
    const savedPlayers = JSON.parse(localStorage.getItem("hendPlayers"));
    if (Array.isArray(savedPlayers)) {
      setPlayers(savedPlayers);
      calculateWinner(savedPlayers);
    }
  }, []);

  // حفظ اللاعبين تلقائيًا عند أي تعديل وحساب الفائز
  useEffect(() => {
    localStorage.setItem("hendPlayers", JSON.stringify(players));
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
    const newPlayer = { id: Date.now(), name, scores: [] };
    setPlayers([...players, newPlayer]);
    setName("");
  };

  // حذف لاعب
  const handleDelete = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  // إعادة تعيين كل اللاعبين والفائز
  const handleReset = () => {
    setPlayers([]);
    setWinner(null);
    localStorage.removeItem("hendPlayers");
  };

  // إضافة نتيجة جديدة للاعب
  const handleAddScore = (id, scoreValue) => {
    const value = parseInt(scoreValue);
    if (isNaN(value)) return;

    const updatedPlayers = players.map((player) =>
      player.id === id
        ? { ...player, scores: [...player.scores, value] }
        : player
    );

    setPlayers(updatedPlayers);
    localStorage.setItem("hendPlayers", JSON.stringify(updatedPlayers));
  };

  // حساب مجموع كل لاعب
  const calculateSum = (player) => player.scores.reduce((total, s) => total + s, 0);

  // حساب الفائز: أول لاعب يصل 360 أو أكثر
  const calculateWinner = (playersList) => {
    const targetSum = 360;
    const winnerPlayer = playersList.find(p => calculateSum(p) >= targetSum);

    if (winnerPlayer) {
      setWinner({ name: winnerPlayer.name, sum: calculateSum(winnerPlayer) });
    } else {
      setWinner(null);
    }
  };

  return (
    <div className="game-container">
      <div className="game-card">
        <h2>تسجيل نتيجة لعبة بناكل</h2>

        {/* إضافة لاعب جديد */}
        <form onSubmit={handleAdd} className="add-player-form">
          <input
            type="text"
            placeholder="ادخل اسم اللاعب"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn add-btn">إضافة لاعب</button>
        </form>

        <div className="notebook">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>الاسم</th>
                <th>النتائج</th>
                <th>المجموع</th>
                <th>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr key={player.id}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>
                    {/* عرض جميع النتائج */}
                    {player.scores.map((s, i) => (
                      <span key={i} className="score-badge">{s}</span>
                    ))}

                    {/* إضافة نتيجة جديدة بدون حد */}
                    <input
                      type="number"
                      placeholder="+ النتيجة"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleAddScore(player.id, e.target.value);
                          e.target.value = "";
                        }
                      }}
                    />
                  </td>
                  <td>{calculateSum(player)}</td>
                  <td>
                    <button className="btn delete-btn" onClick={() => handleDelete(player.id)}>حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* العودة للصفحة السابقة */}
        <button onClick={() => window.location.href='/button'}>العودة</button>

        {/* إعادة تعيين */}
        <button className="btn reset-btn" onClick={handleReset}>إعادة تعيين</button>

        {/* عرض الفائز */}
        {winner ? (
          <div className="winner">
            🏆 الفائز: {winner.name} (المجموع: {winner.sum})
          </div>
        ) : (
          <div className="winner">اللعبة مستمرة، لم يصل أحد للـ 360 بعد</div>
        )}
      </div>
    </div>
  );
}
