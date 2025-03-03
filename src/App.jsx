import { useState } from 'react'
import './App.css'
import ButtonProject from '../components/button_project'

function App() {

  return (
    <>
      <h1>Bonef Teofil's projects</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <ButtonProject href="https://bonefteofil.github.io/Atestat-Info" name="Atestat Info" />
        <ButtonProject href="https://bonefteofil.github.io/LogIn/login.html" name="Login" />
        <ButtonProject href="https://bonefteofil.github.io/xand0" name="X and 0 Game" />
        <ButtonProject href="https://bonefteofil.github.io/Teofil-Projects-Old" name="Old projects" />

      </div>
    </>
  )
}

export default App
