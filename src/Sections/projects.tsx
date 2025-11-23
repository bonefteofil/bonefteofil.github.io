import Panel from "../components/Panel";
import MessagingApp from "../projects/Messaging";
import PersonalWebsite from "../projects/Personal-portfolio";
import QuadrupedRobot from "../projects/Quadruped-robot";
import CastingManager from "../projects/Casting-manager";
import NicoviangiManager from "../projects/Nicoviangi-manager";
import BiaxialRobot from "../projects/Biaxial-robot";
import PortfolioWebsite from "../projects/Real-estate-catalog";
import SimulatorFtc from "../projects/Robot-simulation";
import GameEngine from "../projects/Game-engine";

export default function Projects() {

    return (
        <Panel title="Best Projects">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                <MessagingApp />
                <PersonalWebsite />
                <QuadrupedRobot />
                <CastingManager />
                <NicoviangiManager />
                <BiaxialRobot />
                <PortfolioWebsite />
                <SimulatorFtc />
                <GameEngine />
            </div>
        </Panel>
    )
}