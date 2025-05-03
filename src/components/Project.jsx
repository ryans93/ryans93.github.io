import p1Pic from "../assets/portfolio-screenshots/bolus.png"
function Project(props) {
    const projects = {
        project1: {
            title: "Blood Sugar App",
            image: p1Pic,
            description: `An application aimed to assist type-1 diabetics in controlling their blood sugar. The app can
                            calculate key stats such as insulin:carbohydrate ratio, correction factor, and total daily
                            insulin dosage. Users can also use the app to calculate insulin dosages at meal times, add
                            and edit custom meals, and display logs and averages.`,
            githubLink: "https://github.com/ryans93/Blood-Sugar-App",
            deployedLink: "https://ryans93.github.io/Blood-Sugar-App/",
            techs: ["HTML5", "Bootstrap", "jQuery", "Firebase Realtime Database"]
        }
    }

    const content = projects[props.project]

    return (
        <div>
            <h3 className="w-[100%] flex flex-row justify-center text-white text-4xl font-bold border-white border-b-3 pb-[1rem] mb-[1rem]">Blood Sugar App</h3>
            <section className="flex flex-col xl:flex-row">
                <div className="basis-[100%] lxl:basis-[50%] border-white border-b-3 xl:border-b-0 xl:border-r-3 pb-[1rem] xl:pb-0 xl:pr-[1rem]">
                    <img src={content.image} className="w-full h-full object-contain"/>
                </div>
                <div className="basis-[25%] border-b-3 xl:border-r-3 xl:border-b-0 pr-[1rem] xl:basis-[100%] my-[1rem] xl:my-0">
                    <h3 className="w-[100%] flex flex-row justify-center text-white text-2xl font-bold mb-[1rem]">Description</h3>
                    <p className="pl-[1rem]"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{content.description}</p>
                    <div className="text-l font-semibold  w-full flex justify-evenly py-[1rem]">
                        <a href={content.deployedLink} target="__blank" className="hover:underline hover:cursor-pointer"><span>Live Demo</span></a>
                        <a href={content.githubLink} target="__blank" className="hover:underline hover:cursor-pointer"><span>Git Repo</span></a>
                    </div>
                </div>
                <div className="basis-[25%] xl:basis-[100%]">
                <h3 className="w-[100%] flex flex-row justify-center text-white text-2xl font-bold mb-[1rem] pl-[1rem]">Technologies Used</h3>
                    <ul className="list-disc list-inside pl-[1rem] flex flex-col text-center xl:text-left">
                        {content.techs.map(tech => {
                            return (
                                <li key={tech}>{tech}</li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Project;