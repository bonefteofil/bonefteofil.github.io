import Panel from '../components/Panel'
import TechnologyLogo from '../components/Technology-logo'

export default function Skills() {

    return (
        <Panel title="TECHNICAL SKILLS">
            <div className="flex flex-wrap gap-2 justify-center">

                <div className="w-full text-center mt-4">Strong:</div>
                <TechnologyLogo text="React" src={"react"} />
                <TechnologyLogo text="JavaScript" src={"javascript"} />
                <TechnologyLogo text="TypeScript" src={"typescript"} />
                <TechnologyLogo text="Rest API" src={"restapi"} />
                <TechnologyLogo text="Python" src={"python"} />
                <TechnologyLogo text="Arduino" src={"arduino"} />
                <TechnologyLogo text="SQL" src={"sql"} />
                <TechnologyLogo text="HTML" src={"html"} />
                <TechnologyLogo text="Material UI" src={"mui"} />

                <div className="w-full text-center mt-4">Basic:</div>
                <TechnologyLogo text="C++" src={"c++"} />
                <TechnologyLogo text="C#" src={"csharp"} />
                <TechnologyLogo text="Github" src={"github"} />
                <TechnologyLogo text="MongoDB" src={"mongodb"} />
                <TechnologyLogo text="Next.js" src={"nextjs"} />
                <TechnologyLogo text="Tailwind" src={"tailwind"} />
                <TechnologyLogo text="CSS" src={"css"} />
                <TechnologyLogo text="Java" src={"java"} />
                <TechnologyLogo text="Unity" src={"unity"} />

                <div className="w-full text-center mt-4">Competencies:</div>
                <center>Algorithms, Data structures, OOP, Code refactoring, Problem solving, Debugging</center>
            </div>

        </Panel>
    )
}