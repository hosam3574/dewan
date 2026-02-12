import './App.css'
import './css/nav.css'
import './css/main.css'
import "./css/Regester.css"
import"./css/group.css"
import"./css/GameHend.css"

import Navebar from './componants/navebar'
import Main from './componants/main'
import Group from './componants/Group'
import GameHend from './componants/GameHend'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navebar />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/button' element={<Group />} />
        <Route path='/game-hend' element={<GameHend/>}/>
      </Routes>
    </Router>
  )
}

export default App
