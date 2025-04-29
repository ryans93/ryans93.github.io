import { useState } from 'react';

function About() {

    const [content, setContent] = useState("bio");

    const renderContent = () => {
        if (content === "bio") {
            return (
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Developer with Computer Science background. Earned an
                    Associate’s degree in Computer
                    Science from Valencia College. Also awarded a certificate in Full-Stack Web Development
                    through the University of Central Florida. I was able to gain more experience as an intern
                    at Lockheed Martin through UCF’s College Work Experience Program. Experience developing
                    applications both individually, as well as in an Agile/Scrum environment. Skills in MERN
                    stack, jQuery. Responsive design, SQL, and C#. As a methodical and innovative problem
                    solver, I enjoy the challenge of solving complex problems, and using my knowledge to design
                    applications that solve real-world issues. I am always eager to learn new things, and look
                    forward to further developing my skills as part of a team.
                </p>
            )
        }

        if (content === "awards"){
            return (
                <ul className="list-disc pl-[2rem]">
                    <li className="pb-[1rem]">UCF Coding Boot Camp - Full Stack Web Developement Program Certificate (October 2017)</li>
                    <li className="pb-[1rem]">Valencia College - A.A. in Computer Science (April 2017)</li>
                    <li>Phi Theta Kappa Honor Society (October 2015)</li>
                </ul>
            )
        }

        if (content === "resume"){
            return (
            <embed src="../src/assets/resume/RyanStricklerResume.pdf" type="application/pdf" width="100%" className="h-[calc(98vh-4rem)]" />
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