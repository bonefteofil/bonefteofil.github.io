import Panel from "../components/Panel"
import FixedWidthText from "../components/Fixed-width-text"

export default function Education() {

    return (
        <Panel title="EDUCATION & AWARDS">
            <div className="text-xl/5">
                <div className="w-10 h-1 float-start" />Faculty of Mechanical Engineering and Mechatronics,
                Polytechnic University of Bucharest, Robotics Specialization [2022 - Current]
            </div>
            <FixedWidthText text="-2025 -" />1st Place at Code Quest Hackathon organized by Romanian Intelligence
                Service - VPN development with custom protocol for secure communications<br />
            <FixedWidthText text="-2025 - 2024 - 2023 -" />Scientific Communications Sessions - Quadruped robot
                trained to move using deep learning algorithms<br />
            <FixedWidthText text="-2023 -" />3rd place in faculty robotics competition - Motorized biaxial
                positioning system<br />

            <div className="text-xl/5">
                <div className="w-10 h-1 float-start" />“Ioan Petrus” Theoretical High School,
                Computer Science Profile [2018 - 2022]
            </div>
            <FixedWidthText text="-2022 -" />Grade of 10 in the Computer Science Baccalaureate Exam <br />
            <FixedWidthText text="-2022 - 2021 -" />I qualified twice for the National Stage of the Computer Science Olympiad<br />
            <FixedWidthText text="-2019 - 2020 -" />Participated in the international robotics competition FIRST Tech Challenge
        </Panel>
    )
}