import React, {useState} from 'react';
import './experience.scss';
import experienceData from './experience-data.json';
// import ExpCard from 'components/exp-card/exp-card';

const kFGF      = "fgf"
const kQualcomm = "qualcomm"
const kAutodesk = "autodesk"

function Experience() {
    
    // console.log(experienceData)

    const [title, setTitle] = useState("");
    const [stack, setStack] = useState("");
    const [description, setDescription] = useState("");
    const [inDiv, setInDiv] = useState(false)

    function handleHover(company) {

        setInDiv(true)

        let companyData
        if (company === kFGF) {
            companyData = experienceData[kFGF]
        } else if (company === kQualcomm) {
            companyData = experienceData[kQualcomm]
        } else if (company === kAutodesk) {
            companyData = experienceData[kAutodesk]
        } 

        setTitle(companyData["title"])
        setStack(companyData["company"] + " // " + companyData["startDate"] + " - " + companyData["endDate"])
        setDescription(companyData["description"])

        document.getElementById("experience-job-description").classList.add("experience-job-description-fade")
    }

    function handleMouseExit() {
        
        setInDiv(false)

        document.getElementById("experience-job-description").addEventListener("transitionend", function remove_text(){
            document.getElementById("experience-job-description").removeEventListener("transitionend", remove_text)

            if (!inDiv) {
                setTitle("")
                setStack("")
                setDescription("")
            }
        })

        document.getElementById("experience-job-description").classList.remove("experience-job-description-fade")

    }
    
    return(
        <div id="experience-view" class="view">
            <div id="experience-text">
                <h1 id="experience-title" class="view-title">
                    Experience
                </h1>
                <p id="experience-description" class="view-description">
                    From previous internships, I'm experienced in ETLs, machine learning, and front-end development.
                </p>
            </div>
            <div id="experience-jobs">
                <div id="experience-pics">
                    <img src="experience-fgf-logo.png" alt="experience-fgf-logo.png" class="experience-logos" 
                        onMouseEnter={() => handleHover(kFGF)} 
                        onMouseLeave={() => handleMouseExit()}
                        ></img>
                    <img src="experience-qualcomm-logo.png" alt="experience-qualcomm-logo.png" class="experience-logos"
                        onMouseEnter={() => handleHover(kQualcomm)} 
                        onMouseLeave={() => handleMouseExit()}
                        ></img>
                    <img src="experience-autodesk-logo.jpg" alt="experience-autodesk-logo.png" class="experience-logos"
                        onMouseEnter={() => handleHover(kAutodesk)} 
                        onMouseLeave={() => handleMouseExit()}
                        ></img>
                </div>
                <svg id="experience-rect" width="30vw" height="5px">
                    <rect width="30vw" height="5px" rx="2" ry="2"/>
                </svg>
                <div id="experience-job-description">
                    <h3>{title}</h3>
                    <h4>{stack}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    ) 
}

export default Experience;