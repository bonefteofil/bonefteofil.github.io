import ButtonProject from "../components/Button-project";

export default function BiaxialRobot() {

    return (
        <ButtonProject
            title="2023 - Biaxial Robot for Object Positioning"
            github="https://github.com/bonefteofil/Biaxial-Robot"
            images={2}
        >
            At the Scientific Communications Session 2023 at my faculty, my team built a logistics robot capable of positioning an object
            on a vertical plane with high precision. This was achieved using two stepper motors that pull strings connected to the object.<br /><br />

            <div className="w-10 h-1 float-start" />
            I developed the c++ code for arduino that controls the motors to move the object to specific positions.
            Each motor has two pins: one for direction and one for steps. The motors operate by being active for a millisecond and then inactive at every step.
            The duration of the inactive state determines the motor's speed.<br /><br />

            <div className="w-10 h-1 float-start" />
            The algorithm defines a set of target positions for each motor.
            A step begins with a function that sets parameters such as speed (sleep duration) and target angle.
            It then continues with an update function that checks, at every frame, whether the time to change state has passed and activates or deactivates the motors accordingly.
        </ButtonProject>
    );
}