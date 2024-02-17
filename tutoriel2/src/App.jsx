import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting  from './Greeting'

function App() {

  return (
    <>
    <Greeting/>
    <p>Bienvenue dans mon application React !</p>
    <p>La date et l'heure actuelles sont : {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>
    </>
  )
}

export default App
