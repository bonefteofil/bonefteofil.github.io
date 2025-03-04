import React from "react";
import Panel from "../components/panel";

export default function Contact() {

    const BASE_URL = (import.meta as any).env.BASE_URL;

    return (

        <Panel title="CONTACT">
            <h4 style={{ maxWidth: '800px', marginTop: '20px' }}>
                <a href="https://www.github.com/bonefteofil" target='_blank'>
                    <img
                        className="shadow clickable"
                        src={BASE_URL + "github.svg"}
                        alt="GitHub"
                        style={{
                            width: '90',
                            height: '90',
                            verticalAlign: 'middle',
                            borderRadius: '50%',
                            marginRight: '20px'
                        }}
                    />
                </a>
                <a href="https://www.linkedin.com/in/bonef-teofil/?locale=en_US" target='_blank'>
                    <img
                        className="shadow clickable"
                        src={BASE_URL + "linkedin.svg"}
                        alt="LinkedIn"
                        style={{
                            width: '90',
                            height: '90',
                            verticalAlign: 'middle',
                            borderRadius: '50%',
                        }}
                    />
                </a>
                <br /> <br />
                - Email:&nbsp; <a href="mailto: bonef.teofil@gmail.com">bonef.teofil@gmail.com</a><br />
                - Location: Bucharest, Romania
            </h4>
        </Panel>
    )
}