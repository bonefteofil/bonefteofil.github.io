import React from "react";
import Panel from "../components/panel";
import Button from "../components/button";

export default function Contact() {

    return (
        <Panel title="Bonef Teofil">
            <div className="flex flex-col items-center gap-2">
                Passionate student
                <div className="flex flex-wrap gap-2 justify-center w-full">
                    <Button href="https://www.linkedin.com/in/bonefteofil/?locale=en_US" icon="linkedin">
                        LinkedIn<br />@bonefteofil
                    </Button>
                    <Button href="https://www.github.com/bonefteofil" icon="github">
                        Github<br />@bonefteofil
                    </Button>
                    <Button href="mailto: bonef.teofil@gmail.com" icon="email">
                        Email<br />bonef.teofil@gmail.com
                    </Button>
                </div>
                <div className="text-center">
                    Location: Bucharest/Otopeni, Romania
                </div>
            </div>
        </Panel>
    )
}