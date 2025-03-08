import React from "react";
import ButtonProject from "../../components/button-project";

export default function PersonalWebsite() {

    return (
        <ButtonProject
            title="2025 - Personal Portfolio Website"
            github="https://github.com/bonefteofil/bonefteofil.github.io"
        >
            I created this website to show my projects and skills. The website is built with React and TypeScript,
            and is hosted on GitHub Pages.

            <br /><br />
            Font from google <a className="text-blue-600 underline" target="_blank" href="https://fonts.google.com/specimen/Jersey+10">Jersey 10</a>
            <br />
            Icons from <a className="text-blue-600 underline" target="_blank" href="https://www.svgrepo.com/">SVG Repo</a> and <a className="text-blue-600 underline" target="_blank" href="https://www.iconfinder.com/">Iconfinder</a>
        </ButtonProject>
    );
}