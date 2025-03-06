import React from "react";
import Panel from "../components/panel";

export default function Contact() {

    const BASE_URL = (import.meta as any).env.BASE_URL;

    return (

        <Panel title="Bonef Teofil">
            <div className="flex flex-col items-center gap-2">
                <div className="flex flex-row gap-4">
                    <a href="https://www.github.com/bonefteofil" target='_blank'>
                        <img
                            className="panel clickable w-8 h-8 rounded-full !border-0"
                            src={BASE_URL + "icons/github.svg"}
                            alt="GitHub"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/bonef-teofil/?locale=en_US" target='_blank'>
                        <img
                            className="panel clickable w-8 h-8 rounded-full !border-0"
                            src={BASE_URL + "icons/linkedin.svg"}
                            alt="LinkedIn"
                        />
                    </a>
                </div>
                <div className="text-center">
                    - Email: <a className="underline text-blue-700 hover:text-blue-800 active:text-blue-800"
                        href="mailto: bonef.teofil@gmail.com">bonef.teofil@gmail.com</a><br />
                    - Location: Bucharest, Romania
                </div>
            </div>
        </Panel>
    )
}