import { useState } from 'react';

function About() {

    const [content, setContent] = useState("bio");

    const renderContent = () => {
        if (content === "bio") {
            return (
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a fullstack web developer with a background in computer science.
                    My coding journey began in 2014 at Valencia College where I learned coding fundamentals in C and Java.
                    After obtaining my A.A. in Computer Science, I transferred to the University of Central Florida where I enrolled
                    in their 6-month Fullstack Web Developement course offered through 2U. During this course, I learned many important skills 
                    pertaining to modern web development, including HTML/CSS, javascript, React, nodeJS, and several databases.
                    Upon completion of the course in 2017, I was able to devlop full-stack web applications using MERN stack. I worked
                    as a teaching assistant and tutor with 2U for over 7 years, mentoring and assisting students with building MERN stack applications.
                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using these new skills, I was hired as an intern at Lockheed Marting through UCF's
                    College Work Experience program. I was tasked managing a scheduling application for the Optics Department. During my internship
                    I learned new skills including C#, .NET, and Jira as well as gaining valuable experience working as part of a team.
                    As a methodical and innovative problem solver, I enjoy the challenge of solving complex problems, and using my knowledge
                     to design applications that solve real-world issues. I am always eager to learn new things, and look forward to 
                     further developing my skills as part of a team.
                </p>
            )
        }

        if (content === "skills"){
            return (
                <div className="flex flex-col md:flex-row w-[100%] md:justify-around">
                    <div className="basis-3/10 grow-0 items-center">
                        <h2 className="text-xl font-bold mb-[1rem] border-white border-b-2">Front End:</h2>
                        <ul className="list-disc list-inside">
                            <li>HTML</li>
                            <li>CSS/Responsive Design</li>
                            <li>Bootstrap</li>
                            <li>Tailwind</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>React</li>
                            <li>Firebase Realtime Database</li>

                        </ul>
                    </div>
                    <div className="basis-3/10 grow-0 items-center mt-[1rem] md:mt-0">
                        <h2 className="text-xl font-bold mb-[1rem] border-white border-b-2">Back End:</h2>
                        <ul className="list-disc list-inside">
                            <li>NodeJS</li>
                            <li>Typescript</li>
                            <li>ExpressJS</li>
                            <li>SQL (mySQL, postgreSQL)</li>
                            <li>Sequelize</li>
                            <li>MongoDB & Mongoose</li>
                            <li>GraphQL</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="basis-3/10 grow-0 items-center mt-[1rem] md:mt-0">
                        <h2 className="text-xl font-bold mb-[1rem] border-white border-b-2">Other:</h2>
                        <ul className="list-disc list-inside">
                            <li>GIT</li>
                            <li>MVC design</li>
                            <li>OOP</li>
                            <li>Restful API's/AJAX</li>
                            <li>Computer Science Fundamentals</li>
                        </ul>
                    </div>
                </div>
                
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