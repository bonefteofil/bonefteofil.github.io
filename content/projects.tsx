import React from "react";
import Panel from "../components/panel";
import PortfolioWebsite from "./projects/portfolio-website";
import Xand0 from "./projects/xand0";
import SimulatorFtc from "./projects/simulator-ftc";
import GameEngineCSharp from "./projects/game-engine-cSharp";
import FTC from "./projects/ftc";
import NicoviangiManager from "./projects/nicoviangi-manager";
import CastingManager from "./projects/casting-manager";
import OllamaApi from "./projects/ollama-api";
import SCS2023 from "./projects/scs-2023";
import SCS2024 from "./projects/scs-2024";
import PersonalWebsite from "./projects/personal-website";
import InformaticCertification from "./projects/informatic-certification";
import SimpleAuth from "./projects/simple-auth";

export default function Projects() {

    return (
        <Panel title="Projects">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <PersonalWebsite />
                <OllamaApi />
                <CastingManager />
                <SCS2024 />
                <NicoviangiManager />
                <SCS2023 />
                <Xand0 />
                <PortfolioWebsite />
                <SimpleAuth />
                <InformaticCertification />
                <SimulatorFtc />
                <FTC />
                <GameEngineCSharp />
            </div>
        </Panel>
    )
}