import { useState } from 'react'
import '../styles/App.css'
import CVForm from './CVForm.jsx'
import CVDisplay from './CVDisplay'
import Menu from './Menu'


function App() {

  return (
    <>
      <Menu />
      <CVForm />
      <CVDisplay />
    </>
  )
}

export default App
