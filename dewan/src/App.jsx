import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/nav.css'
import './css/main.css'
import Navebar from './componants/navebar'
import Main from './componants/main'
import Regester from './componants/Regester'
import "./css/Regester.css"

function App() {
  

  return (
    <>
    <Navebar/>
    <Main/>
       <Regester/>

    </>
  )
}

export default App
