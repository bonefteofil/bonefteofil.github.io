import React from "react";
import ButtonProject from "../../components/button-project";

export default function OllamaApi() {

    return (
        <ButtonProject
            title="2024 - Chatbot and Tic-Tac-Toe Game with Ollama API Integration"
            github="https://github.com/bonefteofil/Ollama-API-Integration"
        >
            I developed a chatbot that utilizes the local API from
            Ollama. In the same project, I also created a Tic-Tac-Toe game where Ollama acts as the opponent, receiving a
            prompt with the game board at each move.
        </ButtonProject>
    );
}