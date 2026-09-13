import ButtonProject from "../components/Button-project";

export default function ROS2ALPRBarrier() {

    return (
        <ButtonProject
            title="ROS2 ALPR Barrier | 2026"
            images={2}
            github="https://github.com/bonefteofil/ROS2-ALPR-Barrier"
        >
            It is an automated smart parking system that uses a camera to read
            license plates, replacing standard remote controls.<br /><br />

            The project includes three main parts:<br />
            - The Barrier: Powered by a Raspberry Pi running ROS 2 and Python, this physical component controls the motor
            and sensors, processes the video locally to read the license plate, and communicates with the server.<br />
            - The Server: Built with Python and FastAPI, the backend acts as the brain of the network by using SQLModel to
            validate the extracted text against a SQL database and instantly sending an access command back to the barrier.<br />
            - The Web App: Developed with React and TypeScript, this frontend provides a simple dashboard where users can
            register their license plates and easily manage their parking access.<br /><br />
            This project shows the full process from 3D CAD design and math simulations to a working physical prototype.
        </ButtonProject>
    );
}