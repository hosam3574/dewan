import React from 'react'


function Group() {
  return (
    <div className='group-page'>
        <h1 className='title'>اختار لعبتك يباشا</h1>
        
        <div className='buttons'>
            <button className='game-btn' onClick={()=>window.location.href="/game-hend"}>هند</button>
            <button className='game-btn'>بناكل</button>
            
        </div>
        <button onClick={()=>window.location.href="/"}>العودة</button>
    </div>
  )
}

export default Group
