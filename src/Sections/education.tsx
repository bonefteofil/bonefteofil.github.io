import Panel from "../Components/panel"
import FixedWidthText from "../Components/fixed-width-text"

export default function Education() {

    return (
        <Panel title="EDUCATION & AWARDS">
            <div className="text-xl/5">
                <div className="w-10 h-1 float-start" />Faculty of Mechanical Engineering and Mechatronics,
                Polytechnic University of Bucharest, Robotics Specialization [2022 - Current]
            </div>
            <FixedWidthText text="-2025 - 2024 - 2023 -" />Participation in the Scientific Communications Sessions
             with a quadruped robot trained to move using deep learning algorithms with one 3rd place<br />
            <FixedWidthText text="-2023 -" />3rd place in a robotics competition organized by the faculty featuring a motorized biaxial positioning system<br />
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