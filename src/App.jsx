import BaseChart from "./components/BaseChart.jsx";
import {Config} from "./config/Config.js";
import {BiLogoGithub} from "react-icons/bi";

function App() {
    return (
        <div className="bg-[#26282c] min-h-[100svh] p-3 py-6 sm:p-10 md:p-14 flex flex-col justify-between">
            <div className="flex flex-col gap-10">
                <div className="pt-10 pb-5 px-6 sm:p-0">
                    <img width={250} height={60} src={Config.logo} alt="PANTOhealth"/>
                </div>
                <BaseChart/>
            </div>
            <a target="_blank" href={Config.githubLink} className="text-amber-400/70 px-4 md:p-0 w-fit flex flex-row items-center gap-0.5 font-semibold">
                <BiLogoGithub size={27}/>
                <span>{Config.developerName}</span>
            </a>
        </div>
    )
}
export default App
