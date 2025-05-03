import resume from "../assets/resume/RyanStricklerResume.pdf"

function Navbar() {
    return (
        <nav className="bg-linear-to-r from-red-800 to-black text-white h-[3rem] font-semibold flex items-center">
            <a href="#header" className="ml-[1rem] px-[1rem] border-r border-r-white-500 hover:font-extrabold">Contact</a> 
            <a href="#about" className=" px-[1rem] border-r border-r-white-500 hover:font-extrabold">About Me</a> 
            <a href="#portfolio" className="px-[1rem] border-r border-r-white-500 hover:font-extrabold">Portfolio</a> 
            <a href={resume} target="_blank" className="px-[1rem] hover:font-extrabold">Resume</a>
        </nav>
    )
}

export default Navbar;