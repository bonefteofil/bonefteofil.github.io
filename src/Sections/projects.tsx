import Panel from "../components/Panel";
import ROS2ALPRBarrier from "../projects/ROS2-ALPR-Barrier";
import MessagingApp from "../projects/Messaging";
import PersonalWebsite from "../projects/Personal-portfolio";
import QuadrupedRobot from "../projects/Quadruped-robot";
import NicoviangiManager from "../projects/Nicoviangi-manager";
import BiaxialRobot from "../projects/Biaxial-robot";
import PortfolioWebsite from "../projects/Real-estate-catalog";
import SimulatorFtc from "../projects/Robot-simulation";
import GameEngine from "../projects/Game-engine";

export default function Projects() {

    return (
        <Panel title="Best Projects">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                <ROS2ALPRBarrier />
                <MessagingApp />
                <PersonalWebsite />
                <QuadrupedRobot />
                <NicoviangiManager />
                <BiaxialRobot />
                <PortfolioWebsite />
                <SimulatorFtc />
                <GameEngine />
            </div>
        </Panel>
    )
}