import { useState } from 'react';

function Portfolio() {

    const [content, setContent] = useState("portfolio");

    const renderContent = () => {
        if (content === "portfolio"){
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 p-4">
                    <img src="../src/assets/portfolio-screenshots/bolus.png" onClick={() => setContent("project1")} className="w-full h-[45vh] object-cover hover:cursor-pointer hover:scale-105 transition-transform duration-200 rounded"></img>
                    <img src="../src/assets/portfolio-screenshots/Image-Coming-Soon.png" onClick={() => setContent("project2")} className="w-full h-[45vh] hover:cursor-pointer object-cover hover:scale-105 transition-transform duration-200 rounded"></img>
                    <img src="../src/assets/portfolio-screenshots/Image-Coming-Soon.png" onClick={() => setContent("project3")} className="w-full h-[45vh] hover:cursor-pointer object-cover hover:scale-105 transition-transform duration-200 rounded"></img>
                    <img src="../src/assets/portfolio-screenshots/Image-Coming-Soon.png" onClick={() => setContent("project4")} className="w-full h-[45vh] hover:cursor-pointer object-cover hover:scale-105 transition-transform duration-200 rounded"></img>
                </div>
            )
        }
    }

    return (
        <section id="portfolio" className="flex w-[85%] grow-0 flex flex-col h-fit flex-nowrap mb-[3rem]">
             <h1 className="w-[100%] flex flex-row justify-start text-red-700 text-5xl font-bold border-red-700 border-b-3 pb-[1rem]">Portfolio</h1>
            <div id="portfolioTabs" className="w-[100%] flex flex-row justify-end mt-[1rem]">
                <button type="button" onClick={() => setContent("portfolio")} className={(content === "portfolio" ? "underline bg-red-700/50 " : "bg-red-800 ") + "text-white p-[1rem] font-semibold border-white border-2 border-r-0 border-b-0 hover:underline underline-offset-5"}>Portfolio</button>
                <button type="button" onClick={() => setContent("project1")} className={(content === "project1" ? "underline bg-red-700/50 " : "bg-red-800 ") + "text-white p-[1rem] font-semibold border-white border-2 border-r-0 border-b-0 hover:underline underline-offset-5"}>Project 1</button>
                <button type="button" onClick={() => setContent("project2")} className={(content === "project2" ? "underline bg-red-700/50 " : "bg-red-800 ") + "text-white p-[1rem] font-semibold border-white border-2 border-r-0 border-b-0 hover:underline underline-offset-5"}>Project 2</button>
                <button type="button" onClick={() => setContent("project3")} className={(content === "project3" ? "underline bg-red-700/50 " : "bg-red-800 ") + "text-white p-[1rem] font-semibold border-white border-2 border-r-0 border-b-0 hover:underline underline-offset-5"}>Project 3</button>
                <button type="button" onClick={() => setContent("project4")} className={(content === "project4" ? "underline bg-red-700/50 " : "bg-red-800 ") + "text-white p-[1rem] font-semibold border-white border-2 border-b-0 hover:underline underline-offset-5"}>Project 4</button>
            </div>
            <div id="content" className="bg-red-700/50 text-white flex w-[100%] grow-0 flex flex-col h-fit p-[2rem] border-white-500 border-3">
                {renderContent()}
            </div>
        </section>
    )
}

export default Portfolio;