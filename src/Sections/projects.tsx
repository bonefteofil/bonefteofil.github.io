import Panel from "../components/Panel";
import MessagingApp from "../projects/MessagingApp";
import PersonalWebsite from "../projects/Personal-website";
import QuadrupedRobot from "../projects/Quadruped-robot";
import CastingManager from "../projects/Casting-manager";
import NicoviangiManager from "../projects/Nicoviangi-manager";
import BiaxialRobot from "../projects/Biaxial-robot";
import PortfolioWebsite from "../projects/Portfolio-website";
import SimulatorFtc from "../projects/Simulator-ftc";
import GameEngineCSharp from "../projects/Game-engine-cSharp";

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
                <GameEngineCSharp />
            </div>
        </Panel>
    )
}