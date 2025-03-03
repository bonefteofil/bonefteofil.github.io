import ButtonProject from '../components/button_project'

function App() {

  return (
    <>
      <h1>Bonef Teofil's projects</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <ButtonProject href="https://bonefteofil.github.io/xand0" name="X and 0 Game 2023" />
        <ButtonProject href="https://bonefteofil.github.io/LogIn/login.html" name="Simple auth design 2022" />
        <ButtonProject href="https://bonefteofil.github.io/Atestat-Info" name="Certificate info 2022" />
        <ButtonProject href="https://bonefteofil.github.io/Teofil-Projects-Old" name="Old projects 2019" />
      </div>
    </>
  )
}

export default App
