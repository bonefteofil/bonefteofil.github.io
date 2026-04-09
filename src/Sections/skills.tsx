import Card from '../components/Card'
import Panel from '../components/Panel'
import TechnologyLogo from '../components/Technology-logo'

export default function Skills() {

    return (
        <Panel title="TECHNICAL SKILLS">
            <div className="flex flex-col 2xl:flex-row gap-3 justify-center">
                <Card title="Software Engineering">
                    <TechnologyLogo text="C++" src={"c++"} />
                    <TechnologyLogo text="Python" src={"python"} />
                    <TechnologyLogo text="C#" src={"csharp"} />
                    <TechnologyLogo text="SQL" src={"sql"} />
                    <TechnologyLogo text="MongoDB" src={"mongodb"} />
                    <TechnologyLogo text="Rest API" src={"restapi"} />
                </Card>

                <Card title="Frontend Development">
                    <TechnologyLogo text="React" src={"react"} />
                    <TechnologyLogo text="TypeScript" src={"typescript"} />
                    <TechnologyLogo text="Tailwind" src={"tailwind"} />
                    <TechnologyLogo text="MUI" src={"mui"} />
                    <TechnologyLogo text="HTML/CSS" src={"html"} />
                </Card>

                <Card title="Tools & Hardware">
                    <TechnologyLogo text="Arduino" src={"arduino"} />
                    <TechnologyLogo text="Raspberry Pi" src={"raspberry"} />
                    <TechnologyLogo text="Github" src={"github"} />
                    <TechnologyLogo text="Unity" src={"unity"} />
                </Card>
            </div>
        </Panel>
    )
}