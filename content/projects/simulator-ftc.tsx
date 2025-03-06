import React from "react";
import ButtonProject from "../../components/button-project";
import Button from "../../components/button";

export default function SimulatorFtc() {

    return (
        <ButtonProject
            title='2020 - Robot Simulation for "FIRST Tech Challenge" in Unity'
            images={2}
        >
            As part of the FTC competition, I created a simulation in Unity of the team's robot with holonomic movement, allowing us to
            achieve autonomous navigation.
            <div className="flex gap-2">
                <Button text="Download for Windows"
                    href="https://bonefteofil.github.io/Atestat-Info/Diverse/Ftc%20Robot%20Setup%20(x86).exe" />
                <Button text="Download for MacOS"
                    href="https://bonefteofil.github.io/Atestat-Info/Diverse/Ftc%20Robot.app.zip" />
            </div>
        </ButtonProject>
    );
}