import Panel from "../components/Panel"

export default function Awards() {

    return (
        <Panel title="AWARDS">
            <ul className="list-disc list-outside text-left space-y-1 ml-2">
                <li> 1st Place at Code Quest Hackathon
                    - VPN development with custom protocol for secure communications | 2025</li>
                <li> 3rd Place & Participations at the Faculty's Scientific Communications Sessions
                    - Quadruped robot with deep learning algorithms | 2023, 2024, 2025 </li>
                <li> 3rd place in faculty robotics competition
                    - Motorized biaxial positioning system | 2023 </li>
                <li> Grade of 10 in the Computer Science Baccalaureate Exam | 2022 </li>
                <li> Qualified twice for the National Stage of the Computer Science Olympiad in C++ | 2021, 2022 </li>
                <li> Participation in the international robotics competition FIRST Tech Challenge | 2019, 2020 </li>
            </ul>
        </Panel>
    )
}