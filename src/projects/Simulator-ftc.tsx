import ButtonProject from "../components/Button-project";
import Button from "../components/Button";

export default function SimulatorFtc() {

    return (
        <ButtonProject
            title='2020 - Robot Simulation for "FIRST Tech Challenge" in Unity'
            images={2}
        >
            I participated in the international robotics competition FIRST Tech Challenge where I worked in a team
            to build a robot capable of stacking blocks like on a tower. For the autonomous feature of the robot,
            I created a simulation in Unity of the team's robot with holonomic movement, to test various algorithms for moving and stacking blocks.
            <div className="flex gap-2">
                <Button
                    href="https://bonefteofil.github.io/Atestat-Info/Diverse/Ftc%20Robot%20Setup%20(x86).exe">
                    Download for Windows
                </Button>
                <Button
                    href="https://bonefteofil.github.io/Atestat-Info/Diverse/Ftc%20Robot.app.zip">
                    Download for MacOS
                </Button>
            </div>
        </ButtonProject>
    );
}