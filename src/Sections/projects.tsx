import Panel from "../Components/panel";
import PersonalWebsite from "./Projects/personal-website";
import OllamaApi from "./Projects/ollama-api";
import CastingManager from "./Projects/casting-manager";
import SCS2024 from "./Projects/scs-2024";
import NicoviangiManager from "./Projects/nicoviangi-manager";
import SCS2023 from "./Projects/scs-2023";
import TicTacToe from "./Projects/tictactoe";
import PortfolioWebsite from "./Projects/portfolio-website";
import InformaticCertification from "./Projects/informatic-certification";
import SimulatorFtc from "./Projects/simulator-ftc";
import FTC from "./Projects/ftc";
import GameEngineCSharp from "./Projects/game-engine-cSharp";
import SCS2025 from "./Projects/scs-2025";
import TrainingML from "./Projects/train-ml";

export default function Projects() {

    return (
        <Panel title="Projects">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                <TrainingML />
                <SCS2025 />
                <PersonalWebsite />
                <OllamaApi />
                <CastingManager />
                <SCS2024 />
                <NicoviangiManager />
                <SCS2023 />
                <TicTacToe />
                <PortfolioWebsite />
                <InformaticCertification />
                <SimulatorFtc />
                <FTC />
                <GameEngineCSharp />
            </div>
        </Panel>
    )
}