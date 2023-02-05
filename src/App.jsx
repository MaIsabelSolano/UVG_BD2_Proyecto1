import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from "react-router-dom"

// Other files imports
import './App.css'
import Login from './routes/Login'
import Menu from './routes/Menu'



const App = () => (

  <div className="App">
    <Routes>
      <Route exact path="/" element = {<Login/>}/>
      <Route exact path="/menu" element = {<Menu/>}/>
    </Routes>
  </div>
  
)

export default App
