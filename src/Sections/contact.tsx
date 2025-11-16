import Panel from "../components/Panel";
import Button from "../components/Button";
import Link from "../components/Link";

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
                    Location: <Link text="Bucharest" href="https://www.google.com/maps/place/Bucharest" />/
                    <Link text="Otopeni" href="https://www.google.com/maps/place/Otopeni" />, <Link text="Romania" href="https://www.google.com/maps/place/Romania" />
                </div>
            </div>
        </Panel>
    )
}