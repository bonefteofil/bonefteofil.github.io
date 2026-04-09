import Panel from "../components/Panel"

export default function Education() {

    return (
        <Panel title="EDUCATION & AWARDS">
            <ul className="list-disc list-inside text-left space-y-1">
                <div className="text-xl/5"> Faculty of Mechanical Engineering and Mechatronics, Polytechnic University of Bucharest, Robotics Specialization [2022 - Current] </div>
                <li> 2025 - "1st Place at Code Quest Hackathon organized by Romanian Intelligence Service - VPN development with custom protocol for secure communications </li>
                <li> 2025 - 2024 - 2023 - Scientific Communications Sessions - Quadruped robot trained to move using deep learning algorithms </li>
                <li> 2023 - 3rd place in faculty robotics competition - Motorized biaxial positioning system </li>

                <div className="text-xl/5 mt-4"> “Ioan Petrus” Theoretical High School, Computer Science Profile [2018 - 2022] </div>
                <li> 2022 - Grade of 10 in the Computer Science Baccalaureate Exam </li>
                <li> 2022 - 2021 - I qualified twice for the National Stage of the Computer Science Olympia </li>
                <li> 2019 - 2020 - Participated in the international robotics competition FIRST Tech Challenge </li>
            </ul>
        </Panel>
    )
}