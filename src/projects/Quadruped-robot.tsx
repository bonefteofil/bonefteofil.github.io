import ButtonProject from "../components/Button-project";

export default function QuadrupedRobot() {

    return (
        <ButtonProject
            title="2024 - Quadruped Robot"
            images={2}
        >
            I participation in the Scientific Communications Session with a quadruped robot trained to move using deep
            learning algorithms. The robot was trained to walk in unity and the model was conected live via serial port to
            the robot. The robot tryed to walk in real life based on the model trained in unity.<br /><br />

            <div className="w-10 h-1 float-start" />
            I participated in the Scientific Communications Session with the quadruped robot from last year, but with some modifications.
            The servos were replaced with more powerful ones, we separated the control board from the driver, and the communication with the PC is now done via Wi-Fi.
            However we were unable to make the robot walk, because the simulation in NVIDIA Isaac Sim and Isaac Lab would not work with our model.
        </ButtonProject>
    );
}