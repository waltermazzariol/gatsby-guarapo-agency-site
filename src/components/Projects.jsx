import React from "react"
import project1 from "../assets/data/images/projects/1.jpg"
import project2 from "../assets/data/images/projects/2.jpg"
import project3 from "../assets/data/images/projects/3.jpg"
import project4 from "../assets/data/images/projects/4.jpg"
import project5 from "../assets/data/images/projects/5.jpg"
import project6 from "../assets/data/images/projects/6.jpg"


function Projects({ color }) {

    return (
        <div className={`container-fluid project ${color}`}>
            <div className="project-title text-center mb-4"><span className="text-underline">Proyectos recientes</span></div>
            <div className="project-slider project-animation">
                <img className="project-img" src={project3} alt="None Culture" />
                <img className="project-img" src={project1} alt="Piel de oro" />
                <img className="project-img" src={project2} alt="wansite.co" />
                <img className="project-img" src={project4} alt="EBB flow" />
                <img className="project-img" src={project5} alt="Guataca nights" />
                <img className="project-img" src={project6} alt="baquirto de papel" />
                <img className="project-img" src={project3} alt="None Culture" />
                <img className="project-img" src={project1} alt="Piel de oro" />
                <img className="project-img" src={project2} alt="wansite.co" />
                <img className="project-img" src={project4} alt="EBB flow" />
                <img className="project-img" src={project5} alt="Guataca nights" />
                <img className="project-img" src={project6} alt="baquirto de papel" />
            </div>
        </div>
    )
}

export default Projects