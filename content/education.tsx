import React from "react"
import Panel from "../components/panel"
import FixedText from "../components/fixed-text"

export default function Education() {

    return (
        <Panel title="EDUCATION & AWARDS" >
            <div className="text-xl/5">
                <div className="w-10 h-1 float-start" />Faculty of Mechanical Engineering and Mechatronics,
                Polytechnic University of Bucharest, Robotics Specialization [2022 - Current]
            </div>
            <FixedText text="-2024 -" />Participation in the Scientific Communications Session with a quadruped robot trained to move using deep
            learning algorithms<br />
            <FixedText text="-2023 -" />3rd place in a robotics competition organized by the faculty featuring a motorized biaxial positioning system<br />
            <FixedText text="-2023 -" />3rd place in the Scientific Communications Session for the automation of the positioning system<br />
            <FixedText text="-2022 -" />Awarded a scholarship for the faculty<br />
            <FixedText text="-2022 -" />Volunteered in IT and media for the faculty association and the Polytechnic association <br /><br />
            <div className="text-xl/5">
                <div className="w-10 h-1 float-start" />“Ioan Petrus” Theoretical High School,
                Computer Science Profile [2018 - 2022]
            </div>
            <FixedText text="-2022 -" />Grade of 10 in the Computer Science Baccalaureate Exam <br />
            <FixedText text="-2022 - 2021 -" />I qualified twice for the National Stage of the Computer Science Olympiad<br />
            <FixedText text="-2022 -" />ECDL obtained with 94.5%<br />
            <FixedText text="-2022 -" />Computer Science Certificate obtained<br />
            <FixedText text="-2021 -" />Winner of a robotics kit at the NEXTLAB competition <br />
            <FixedText text="-2019 - 2020 -" />Participated in the international robotics competition FIRST Tech Challenge
        </Panel>
    )
}