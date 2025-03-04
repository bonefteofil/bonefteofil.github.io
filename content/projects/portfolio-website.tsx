import React from "react";
import ButtonProject from "../../components/button-project";

export default function PortfolioWebsite() {

    return (
        <ButtonProject
            title="Portfolio Presentation Website"
            year={2022}
            href="https://nicoviangi.ro/"
            github="https://github.com/Skiuileuf/nicoviangi"
        >
            Acest website este un portofoliu pentru prezentarea proiectelor imobiliare ale firmei Nicoviangi.
            Tema este minimalista specifica preferintelor clientilor acelei firme.
        </ButtonProject>
    );
}