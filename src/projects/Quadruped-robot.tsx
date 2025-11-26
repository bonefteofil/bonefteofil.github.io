import ButtonProject from "../components/Button-project";

export default function QuadrupedRobot() {

    return (
        <ButtonProject
            title="2024 - Quadruped Robot"
            images={2}
            github="https://github.com/bonefteofil/Quadruped-Robot"
        >
            I participated in the Scientific Communications Session with a quadruped robot trained to move using deep learning algorithms.
            The robot was trained to walk in Unity, and the model was connected live via serial port to the robot. The robot tried to walk in real life
            based on the model trained in Unity. Later I developed a server on a PC to send instructions to the robot via Wi-Fi.
            However, we were unable to make the robot walk, because the simulation in NVIDIA Isaac Sim and Isaac Lab would not work with our model.
        </ButtonProject>
    );
}