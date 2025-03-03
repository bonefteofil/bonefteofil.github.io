import ButtonProject from '../components/button_project'
import Panel from '../components/panel'

function App() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '100px' }}>

        <h1>Bonef Teofil</h1>

        <Panel title="CONTACT">
          <h2 style={{ maxWidth: '800px' }}>
            <a href="https://www.github.com/bonefteofil" target='_blank'>
              <img
                src="/media/github.svg"
                alt="GitHub"
                style={{
                  width: '90',
                  height: '90',
                  verticalAlign: 'middle',
                }}
              />
            </a>
            <a href="https://www.linkedin.com/in/bonef-teofil/?locale=en_US" target='_blank'>
              <img
                src="/media/linkedin.svg"
                alt="LinkedIn"
                style={{
                  width: '90',
                  height: '90',
                  verticalAlign: 'middle',
                }}
              />
            </a>
            <br />
            <br />
            • Email:&nbsp;
            <a href="mailto: bonef.teofil@gmail.com">
              bonef.teofil@gmail.com
            </a>
            <p>• Address: Bucharest, Romania</p>
          </h2>
        </Panel>


        <Panel title="ABOUT MYSELF">
          <h2 style={{ maxWidth: '800px' }}>
            I am a 21-year-old student, dedicated and passionate about programming, with experience in algorithmic problemsolving. My active participation in numerous competitions and Olympiads has been complemented by the
            development of various projects in which I have tackled complex challenges and proposed efficient solutions. These
            experiences have enriched my knowledge of computer science, enhanced my teamwork skills, and strengthened my
            ability to meet deadlines.
          </h2>
        </Panel>

        <Panel title="TECHNICAL SKILLS ">
          <h2 style={{ maxWidth: '800px', textAlign: 'left' }}>
            <p>• Abilities: Algorithms, Data structures, OOP, Code refactoring, Problem solving, Testing and Debugging</p>
            <p>• Desktop: C++, C#, Java, GitHub, Unity, Arduino, Python, Dart (Flutter), Swift, LabVIEW</p>
            <p>• Web: Html, Css, JavaScript, TypeScript, Bootstrap, React, Next.js, Node.js, RESTful API, MongoDB, FontAwesome, MUI, AntDesign, Mantine UI</p>
          </h2>
        </Panel>

        <Panel title="Projects">
          <ButtonProject name="Portofolio Website 2025" href="https://github.com/bonefteofil/bonefteofil.github.io" />
          <ButtonProject name="Scientific Communications Session 2024" />
          <ButtonProject name="Chatbot and Tic-Tac-Toe Game with Ollama API Integration 2024" href='https://github.com/bonefteofil/Ollama-API-Integration' />
          <ButtonProject name="Scientific Communications Session 2023" />
          <ButtonProject name="Simple X and 0 Game 2023" href="https://bonefteofil.github.io/xand0" />
          <ButtonProject name="Simple auth design 2022" href="https://bonefteofil.github.io/LogIn/login.html" />
          <ButtonProject name="Certificate info 2022" href="https://bonefteofil.github.io/Atestat-Info" />
          <ButtonProject name="Web Application for Managing Contracts 2022" />
          <ButtonProject name="Portfolio Presentation Website 2022" href="https://nicoviangi.ro/" />
          <ButtonProject name='Robot Simulation for "FIRST Tech Challenge" in Unity' />
          <ButtonProject name="2D Game Engine for Console in C#" />
        </Panel>

        <Panel title="EDUCATION" >
          <h2 style={{ textAlign: 'left' }}>
            <p>
              Faculty of Mechanical Engineering and Mechatronics, Polytechnic University of Bucharest, Robotics
              Specialization
              [ 08/2022 – Current ]<br />
              • Participation in the Scientific Communications Session with a quadruped robot trained to move using deep
              learning algorithms - Year 2 - 2024<br />
              • 3rd place in a robotics competition organized by the faculty featuring a motorized biaxial positioning system -
              Year 1 - 2023 <br />
              • 3rd place in the Scientific Communications Session for the automation of the positioning system - Year 1 -
              2023 <br />
              • Awarded a scholarship for the Faculty of Mechanical Engineering and Mechatronics - 2022 <br />
              • Volunteered in IT and media for the faculty association and the Polytechnic association - 2022 <br />
            </p>
            <p>
              “Ioan Petrus” Theoretical High School, Computer Science Profile
              [ 08/2018 – 06/2022 ] <br />
              • Grade of 10 in the Computer Science Baccalaureate Exam - 2022 <br />
              • I qualified twice for the National Stage of the Computer Science Olympiad - 12th and 11th grade – 2022 and 2021 <br />
              • ECDL obtained with 94.5% - 12th grade - 2022 <br />
              • Computer Science Certificate obtained - 12th grade - 2022 <br />
              • Winner of a robotics kit at the NEXTLAB competition - 11th grade - 2021 <br />
              • Participated in the international robotics competition FIRST Tech Challenge - 2020 - 2021
            </p>
          </h2>
        </Panel>
      </div >
    </>
  )
}

export default App
