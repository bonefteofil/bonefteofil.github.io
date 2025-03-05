import React from "react";
import ButtonProject from "../../components/button-project";

export default function SimulatorFtc() {

    return (
        <ButtonProject
            title='2020 - Robot Simulation for "FIRST Tech Challenge" in Unity'
            images={2}
        >
            As part of the FTC competition, I created a simulation in Unity of the team's robot with holonomic movement, allowing us to
            achieve autonomous navigation.
            <br />
            <a className='button-project shadow clickable borders' style={{ marginRight: '14px' }}
                href="https://bonefteofil.github.io/Atestat-Info/Diverse/Ftc%20Robot%20Setup%20(x86).exe"
            >Download for Windows</a>
            <a className='button-project shadow clickable borders' style={{ marginTop: '14px' }}
                href="https://bonefteofil.github.io/Atestat-Info/Diverse/Ftc%20Robot.app.zip"
            >Download for MacOS</a>
        </ButtonProject>
    );
}