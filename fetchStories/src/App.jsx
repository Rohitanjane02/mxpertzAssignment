// import { useState, useEffect } from 'react'
// import Card from './component/Card';
import Home from "./Pages/Home";
import Leaderboard from "./Pages/Leaderboard";
import DailyQuiz from "./Pages/DailyQuiz";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/leaderboad' element = {<Leaderboard/>}/>
        <Route path='/dailyquiz' element = {<DailyQuiz/>}/>
      </Routes>
    </Router>
  )
}

export default App
