import ButtonProject from "../../Components/button-project";

export default function SCS2025() {

    return (
        <ButtonProject
            title="2025 - Scientific Communications Session"
            images={1}
        >
            I participated in the Scientific Communications Session with the quadruped robot from last year, but with some modifications.
            The servos were replaced with more powerful ones, we separated the control board from the driver, and the communication with the PC is now done via Wi-Fi.
            However we were unable to make the robot walk, because the simulation in NVIDIA Isaac Sim and Isaac Lab would not work with our model.
        </ButtonProject>
    );
}