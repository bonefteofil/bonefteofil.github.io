import Panel from '../components/Panel'
import TechnologyLogo from '../components/Technology-logo'

export default function Skills() {

    return (
        <Panel title="TECHNICAL SKILLS">
            <div className="flex flex-wrap gap-2 justify-center">

                <div className="w-full text-center mt-4">Good:</div>
                <TechnologyLogo text="C++" src={"c++"} />
                <TechnologyLogo text="React" src={"react"} />
                <TechnologyLogo text="Github" src={"github"} />
                <TechnologyLogo text="Material UI" src={"mui"} />
                <TechnologyLogo text="Tailwind" src={"tailwind"} />
                <TechnologyLogo text="JavaScript" src={"javascript"} />
                <TechnologyLogo text="TypeScript" src={"typescript"} />
                <TechnologyLogo text="Arduino" src={"arduino"} />
                <TechnologyLogo text="Python" src={"python"} />
                <TechnologyLogo text="SQL" src={"sql"} />
                <TechnologyLogo text="HTML" src={"html"} />
                <TechnologyLogo text="CSS" src={"css"} />

                <div className="w-full text-center mt-4">Basic:</div>
                <TechnologyLogo text="C#" src={"csharp"} />
                <TechnologyLogo text="Node.js" src={"nodejs"} />
                <TechnologyLogo text="Unity" src={"unity"} />
                <TechnologyLogo text="MongoDB" src={"mongodb"} />
                <TechnologyLogo text="Next.js" src={"nextjs"} />
                <TechnologyLogo text="Rest API" src={"restapi"} />
                <TechnologyLogo text="Java" src={"java"} />
                <TechnologyLogo text="Flutter" src={"flutter"} />

                <div className="w-full text-center mt-4">Other Skills:</div>
                <center>Algorithms, Data structures, OOP, Code refactoring, Problem solving, Debugging</center>
            </div>

        </Panel>
    )
}