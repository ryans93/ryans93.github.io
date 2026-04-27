import { useState } from 'react';
import resume from "../assets/resume/RyanStricklerResume.pdf"

function About() {

    const [content, setContent] = useState("bio");

    const renderContent = () => {
        if (content === "bio") {
            return (
                <p>
                    &emsp;I have a background in software development and spent the last several years working
                    as a teaching assistant in a full-stack web development program, where I helped students 
                    build and debug applications across the frontend, backend, and database layers.<br/><br/>
                    &emsp;A big part of that role was diagnosing issues, identifying root causes, and helping people 
                    fix bugs, so I developed a really strong foundation in troubleshooting and understanding 
                    how systems behave under different conditions.<br/><br/>
                    &emsp;Before that, I worked as a software engineering intern at Lockheed Martin, where I 
                    contributed to a production scheduling application and gained experience working in a 
                    more structured engineering environment.<br/><br/>
                    &emsp;More recently, I took some time away to handle full-time caregiving responsibilities for 
                    a family member, and now that things have stabilized, I’m looking to get back into the 
                    industry.<br/><br/>
                    &emsp;Right now, I’m focusing on QA and software testing roles because they align really well 
                    with my strengths in debugging and system analysis, but longer term I’m interested in 
                    continuing to grow in technical roles where I can deepen my understanding of systems 
                    and contribute more broadly.
                </p>
            )
        }

        if (content === "skills") {
            return (
                <div className="flex flex-col xl:flex-row w-[100%] xl:justify-around">
                    <div className="basis-2/10 grow-0 items-center">
                        <h2 className="text-xl font-bold mb-[1rem] border-white border-b-2">Testing & Debugging:</h2>
                        <ul className="list-disc list-inside">
                            <li>Manual Testing</li>
                            <li>Debugging</li>
                            <li>Troubleshooting</li>
                            <li>Test Case Validation</li>
                            <li>Defect Identification</li>
                        </ul>
                    </div>
                    <div className="basis-2/10 grow-0 items-center mt-[1rem] xl:mt-0">
                        <h2 className="text-xl font-bold mb-[1rem] border-white border-b-2">Languages:</h2>
                        <ul className="list-disc list-inside">
                            <li>Javascript(ES6)</li>
                            <li>Typescript</li>
                            <li>Python</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className="basis-2/10 grow-0 items-center mt-[1rem] xl:mt-0">
                        <h2 className="text-xl font-bold mb-[1rem] border-white border-b-2">Frameworks and Tools:</h2>
                        <ul className="list-disc list-inside">
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Restful API's</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className="basis-2/10 grow-0 items-center mt-[1rem] xl:mt-0">
                        <h2 className="text-xl font-bold mb-[1rem] border-white border-b-2">Databases:</h2>
                        <ul className="list-disc list-inside">
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                    <div className="basis-2/10 grow-0 items-center mt-[1rem] xl:mt-0">
                        <h2 className="text-xl font-bold mb-[1rem] border-white border-b-2">Concepts:</h2>
                        <ul className="list-disc list-inside">
                            <li>Agile/Scrum</li>
                            <li>MVC Architecture</li>
                            <li>API Integration</li>
                            <li>Tailwind</li>
                            <li>Object-Oriented Programming</li>
                        </ul>
                    </div>
                </div>

            )
        }

        if (content === "awards") {
            return (
                <ul className="list-disc pl-[2rem]">
                    <li className="pb-[1rem]">UCF Coding Boot Camp - Full Stack Web Developement Program Certificate (October 2017)</li>
                    <li className="pb-[1rem]">Valencia College - A.A. of Computer Science (April 2017)</li>
                    <li>Phi Theta Kappa Honor Society (October 2015)</li>
                </ul>
            )
        }

        if (content === "resume") {
            return (
                <embed src={resume} type="application/pdf" width="100%" className="h-[calc(98vh-4rem)]" />
            )
        }
    }

    return (
        <section id="about" className="flex w-[85%] grow-0 flex flex-col h-fit flex-nowrap mb-[3rem]" >
            <h1 className="w-[100%] flex flex-row justify-start text-red-700 text-5xl font-bold border-red-700 border-b-3 pb-[1rem]">About Me</h1>
            <div id="aboutTabs" className="w-[100%] flex flex-row justify-end mt-[1rem]">
                <button type="button" onClick={() => setContent("bio")} className={(content === "bio" ? "underline bg-red-700/50 " : "bg-red-800 ") + "text-white p-[1rem] font-semibold border-white border-2 border-r-0 border-b-0 hover:underline underline-offset-5"}>Bio</button>
                <button type="button" onClick={() => setContent("skills")} className={(content === "skills" ? "underline bg-red-700/50 " : "bg-red-800 ") + "text-white p-[1rem] font-semibold border-white border-2 border-r-0 border-b-0 hover:underline underline-offset-5"}>Skills</button>
                <button type="button" onClick={() => setContent("awards")} className={(content === "awards" ? "underline bg-red-700/50 " : "bg-red-800 ") + "text-white p-[1rem] font-semibold border-white border-2 border-r-0 border-b-0 hover:underline underline-offset-5"}>Awards</button>
                <button type="button" onClick={() => setContent("resume")} className={(content === "resume" ? "underline bg-red-700/50 " : "bg-red-800 ") + "text-white p-[1rem] font-semibold border-white border-2 border-b-0 hover:underline underline-offset-5"}>Resume</button>
            </div>
            <div id="content" className="bg-red-700/50 text-white flex w-[100%] grow-0 flex flex-col h-fit p-[2rem] border-white-500 border-3">
                {renderContent()}
            </div>
        </section>
    )
}

export default About;