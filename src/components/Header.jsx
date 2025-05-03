import gitIcon from "../assets/icons/icons8-github-ios-17-glyph/icons8-github-60.png"
import lnIcon from "../assets/icons/icons8-linkedin-ios-17-glyph/icons8-linkedin-60.png"

function Header() {
    return (
        <section id="header" className="bg-red-700/50 text-white flex w-[85%] grow-0 flex md:flex-row flex-col h-fit p-[2rem] my-[3rem] border-white-500 border-3">
            <div className="basis-1/3 flex justify-center items-center md:border-r md:border-r-2 md:border-r-white-500 md:border-b-0 border-b-2 md:border-b-white-500 py-[1rem]" >
                <img src="Ryan.Strickler_7410_square.jpg" alt="Headshot pic" width="80%" height="80%" className="rounded-full" />
            </div>
            <div className="basis-2/3 flex flex-col justify-evenly items-center">
                <h1 className="text-4xl font-extrabold py-[1rem]">Ryan Strickler</h1>
                <h3 className="text-2xl font-bold">Full Stack Web Developer</h3>
                <h5 className="flex w-full lg:flex-row lg:justify-evenly flex-col items-center py-[1rem] underline">
                    <a className="text-xl font-bold " href="mailto:ryan.strickler.1993@gmail.com">Email: ryan.strickler.1993@gmail.com</a>
                    <a className="text-xl font-bold " href="tel:+13524595396">Phone: (352)-459-5396</a>
                </h5>
                <div id="imageContainer" className="flex flex-row justify-center">
                    <a href="https://www.linkedin.com/in/ryan-strickler/" target="__blank"><img src={gitIcon} alt="Github Icon" className="px-[1rem]"/></a>
                    <a href="https://github.com/ryans93" target="__blank"><img src={lnIcon} alt="LinkedIn Icon" /></a>
                </div>
            </div>
        </section>
    )
}

export default Header;