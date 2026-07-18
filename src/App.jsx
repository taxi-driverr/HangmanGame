import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/start" element = {<StartGame/>}  />  
      <Route path="/play" element = {<PlayGame/>}  />  
      <Route path="/" element = {<div><h1>Welcome to the Hangman Game</h1></div>}  />  
    </Routes>
  )
}

export default App
