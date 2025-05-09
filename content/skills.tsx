import Panel from '../components/panel'
import TechnologyLogo from '../components/tehnology-logo'

export default function Skills() {

    return (
        <Panel title="TECHNICAL SKILLS">

            <div className="flex flex-wrap gap-4 justify-center">
                <TechnologyLogo text="C++" src={"c++"} />
                <TechnologyLogo text="Python" src={"python"} />
                <TechnologyLogo text="React" src={"react"} />
                <TechnologyLogo text="HTML" src={"html"} />
                <TechnologyLogo text="JavaScript" src={"javascript"} />
                <TechnologyLogo text="TypeScript" src={"typescript"} />
                <TechnologyLogo text="CSS" src={"css"} />
                <TechnologyLogo text="Node.js" src={"nodejs"} />
                <TechnologyLogo text="Next.js" src={"nextjs"} />
                <TechnologyLogo text="Rest API" src={"restapi"} />
                <TechnologyLogo text="Tailwind" src={"tailwind"} />
                <TechnologyLogo text="Material UI" src={"mui"} />
                <TechnologyLogo text="Arduino" src={"arduino"} />
                <TechnologyLogo text="Unity" src={"unity"} />
                <TechnologyLogo text="C#" src={"csharp"} />
                <TechnologyLogo text="Java" src={"java"} />
                <TechnologyLogo text="SQL" src={"sql"} />
                <TechnologyLogo text="MongoDB" src={"mongodb"} />
                <TechnologyLogo text="Flutter" src={"flutter"} />
                <TechnologyLogo text="Github" src={"github"} />
            </div>

            Abilities: Algorithms, Data structures, OOP, Code refactoring, Problem solving, Testing and Debugging <br />
        </Panel>
    )
}