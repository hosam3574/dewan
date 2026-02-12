import React from 'react'
import { useState } from 'react'


function Main() {

  return (

    <div className='all'>


        <div  className='main'>
      <h1 className='h1'>سجل سّجل  نتائج الشّدة مع أصحابك     </h1>


      <div className='alldiv'>

<div className='button1'>
      <button className='button0' > <b>لعبة جديدة </b> </button></div>
     
     <div  className='button2'>
        <button className='button00'onClick={window.location.href="../componants/Group"} >انشاء مجموعة </button>
        </div> 

   </div>

</div>


{/* 
<div >
<div className="images-container">
  <img
    className="img"
    src="../photo/WhatsApp_Image_2026-02-11_at_1.10.59_AM-removebg-preview.png"
    alt=""
  />
  <img className='img2' src="../photo/WhatsApp_Image_2026-02-11_at_5.20.33_PM-removebg-preview.png" alt="" />

</div>


</div> */}



    </div>
  )
}

export default Main
