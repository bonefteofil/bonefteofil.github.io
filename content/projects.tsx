import React from "react";
import Panel from "../components/panel";
import ButtonProject from "../components/button_project";

export default function Projects() {

    return (
        <Panel title="Projects">
            <ButtonProject name="This portfolio website 2025" href="https://github.com/bonefteofil/bonefteofil.github.io" />
            <ButtonProject name="Scientific Communications Session 2024" />
            <ButtonProject name="Chatbot and Tic-Tac-Toe Game with Ollama API Integration 2024" href='https://github.com/bonefteofil/Ollama-API-Integration' />
            <ButtonProject name="Scientific Communications Session 2023" />
            <ButtonProject name="Simple X and 0 Game 2023" href="https://bonefteofil.github.io/xand0" />
            <ButtonProject name="Simple auth design 2022" href="https://bonefteofil.github.io/LogIn/login.html" />
            <ButtonProject name="Certificate info 2022" href="https://bonefteofil.github.io/Atestat-Info" />
            <ButtonProject name="Web Application for Managing Contracts 2022" />
            <ButtonProject name="Portfolio Presentation Website 2022" href="https://nicoviangi.ro/" />
            <ButtonProject name='Robot Simulation for "FIRST Tech Challenge" in Unity' />
            <ButtonProject name="2D Game Engine for Console in C#" />
        </Panel>
    )
}