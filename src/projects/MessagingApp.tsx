import ButtonProject from "../components/Button-project";
import Link from "../components/Link";

export default function MessagingApp() {

    return (
        <ButtonProject
            title="2025 - Messaging App"
            href= "https://messaging.bonefteofil.ro"
            github="https://github.com/bonefteofil/MessagingApp"
            images={1}
        >
            A simple group chat application featuring secure authentication and management of groups and members.<br />

            <div className="text-xl mt-2">Tech Stack</div>
            -Frontend:{" "}
            <Link text="React" href="https://react.dev" />{" • "}
            <Link text="Vite" href="https://vite.dev" />{" • "}
            <Link text="TypeScript" href="https://www.typescriptlang.org" />{" • "}
            <Link text="Tailwind" href="https://tailwindcss.com" />{" • "}
            <Link text="Mantine" href="https://mantine.dev" />{" • "}
            <Link text="Font Awesome" href="https://fontawesome.com/icons" /><br />
            -Backend:{" "}
            <Link text="C#" href="https://dotnet.microsoft.com/en-us/languages/csharp" />{" • "}
            <Link text=".Net" href="https://dotnet.microsoft.com/en-us/apps/aspnet/apis" />{" • "}
            <Link text="JWT" href="https://www.jwt.io" /><br />
            -Database:{" "}
            <Link text="Postgres" href="https://www.postgresql.org" />{" • "}
            <Link text="Supabase" href="https://supabase.com" /><br />
            -Deployment:{" "}
            <Link text="Cloudflare" href="https://cloudflare.com" />{" • "}
            <Link text="Github Pages" href="https://docs.github.com/en/pages" />{" • "}
            <Link text="Azure" href="https://azure.microsoft.com" /><br />

            <div className="text-xl mt-2">Features</div>
            -Account Management - Register and login from multiple devices<br />
            -Groups - Create public or private groups and manage members<br />
            -Messaging - Send, edit, and delete messages on groups<br /><br />

        </ButtonProject>
    );
}