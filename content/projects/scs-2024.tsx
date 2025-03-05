import React from "react";
import ButtonProject from "../../components/button-project";

export default function SCS2024() {

    return (
        <ButtonProject
            title="2024 - Scientific Communications Session"
            images={2}
        >
            I participation in the Scientific Communications Session with a quadruped robot trained to move using deep
            learning algorithms. The robot was trained to walk in unity and the model was conected live via serial port to
            the robot. The robot tryed to walk in real life based on the model trained in unity.
        </ButtonProject>
    );
}