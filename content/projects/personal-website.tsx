import React from "react";
import ButtonProject from "../../components/button-project";

export default function PersonalWebsite() {

    return (
        <ButtonProject
            title="2025 - Personal Portfolio Website"
            github="https://github.com/bonefteofil/bonefteofil.github.io"
        >
            As a student passionate about software development, I'm always looking to improve my skills and share my work with the world.
            I build this website to serve as my digital portfolio, where I can showcase my projects, tehnologies I've worked with and my overall growth as a developer.
            In the contact section, uesrs can find my social and email, while on the projects page, users can explore my work with descriptions, source code links and media previews.

            <div className="text-xl mt-2">Tech stack</div>
            I used modern web technologies to ensure good performance and future scalability.<br />
            - built with React and Vite for a fast and optimized development experience.<br />
            - structured with well-thought components with complex properties to ensure reusability and efficiency.<br />
            - TypeScript is used for type checking, reducing errors and improves overall code quality.

            <div className="text-xl mt-2">Design</div>
            The design takes inspiration from retro-style interfaces, featuring sharp corners and a minimalistic aesthetic, but with a modern touch.<br />
            - the color palette is composed of shades of gray, with the background gradient in blue and purple.<br />
            - cons are from <a className="text-blue-600 underline" target="_blank" href="https://www.svgrepo.com/">SVG Repo</a> and <a className="text-blue-600 underline" target="_blank" href="https://www.iconfinder.com/">Iconfinder</a>.<br />
            - font from google <a className="text-blue-600 underline" target="_blank" href="https://fonts.google.com/specimen/Jersey+10">Jersey 10</a>.
        </ButtonProject>
    );
}