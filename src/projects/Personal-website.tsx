import ButtonProject from "../components/Button-project";
import Link from "../components/Link";

export default function PersonalWebsite() {

    return (
        <ButtonProject
            title="2025 - Personal Portfolio Website"
            github="https://github.com/bonefteofil/bonefteofil.github.io"
        >
            As a student passionate about software development, I'm always looking to improve my skills and share my work with the world.
            I built this website to serve as my digital portfolio, where I showcase my projects, the technologies I've worked with and my overall growth as a developer.
            In the contact section, uesrs can find my social and email, while on the projects page, users can explore my work with descriptions, source code links and media previews.

            <div className="text-xl mt-2">Tech stack</div>
            I used modern web technologies to ensure good performance and future scalability.<br />
            - built with <Link text="React" href="https://react.dev/" /> and <Link text="Vite" href="https://vite.dev/" /> for a fast and optimized development experience.<br />
            - structured using <Link text="Tailwind CSS" href="https://tailwindcss.com/" /> with well-thought components to ensure reusability and efficiency.<br />
            - <Link text="TypeScript" href="https://www.typescriptlang.org/" /> is used for type checking, reducing errors and improves overall code quality.

            <div className="text-xl mt-2">Design</div>
            The design takes inspiration from retro-style interfaces, featuring sharp corners and a minimalistic aesthetic, but with a modern touch.<br />
            - the color palette is composed of shades of gray, with the background gradient in blue and purple.<br />
            - icons are downloaded from <Link text="SVG Repo" href="https://www.svgrepo.com/" /> and <Link text="Iconfinder" href="https://www.iconfinder.com/" />, ensuring a clean and professional look.<br />
            - font from <Link text="Google Fonts - Jersey 10" href="https://fonts.google.com/specimen/Jersey+10" />.
        </ButtonProject>
    );
}