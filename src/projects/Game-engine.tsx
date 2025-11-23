import ButtonProject from "../components/Button-project";

export default function GameEngine() {

    return (
        <ButtonProject
            title='2019 - 2D Game Engine'
            github="https://github.com/bonefteofil/TeoEngine"
            images={2}
        >
            C# console library that displays polygons, ellipses, text, and buttons with properties such as
            position, rotation, color, parent-child relationships, and mouse events. It also
            provides functions for a timer, mouse control, FPS adjustment, and console dimensions.
        </ButtonProject>
    );
}