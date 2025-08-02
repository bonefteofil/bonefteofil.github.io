import Panel from "../components/panel";
import PersonalWebsite from "./projects/personal-website";
import OllamaApi from "./projects/ollama-api";
import CastingManager from "./projects/casting-manager";
import SCS2024 from "./projects/scs-2024";
import NicoviangiManager from "./projects/nicoviangi-manager";
import SCS2023 from "./projects/scs-2023";
import TicTacToe from "./projects/tictactoe";
import PortfolioWebsite from "./projects/portfolio-website";
import InformaticCertification from "./projects/informatic-certification";
import SimulatorFtc from "./projects/simulator-ftc";
import FTC from "./projects/ftc";
import GameEngineCSharp from "./projects/game-engine-cSharp";
import SCS2025 from "./projects/scs-2025";
import TrainingML from "./projects/train-ml";

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