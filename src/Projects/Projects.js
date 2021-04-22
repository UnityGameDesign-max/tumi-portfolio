import React from 'react'
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'

function Projects() {
    return (
        <div className="projects">
            <div className="project__top">
                <h1 className="projects__text">My Projects</h1>
                <p className="projects__paragraph">Welcome to TumiDev's projects</p>
                <img data-aos="fade-right" className="project__img" src={process.env.PUBLIC_URL + "/Programming.svg"} alt=" "/>
            </div>
            

            <div className="project__row">
                <ProjectCard projectName="Amazon Clone" finishedDate="invalid" description="This is a project I did to represent skills" company="None" type="personal" link="#"/>
                <ProjectCard projectName="Instagram Clone" finishedDate="invalid" description="This is a project I did to represent skills" company="None" type="personal" link="#"/>
                <ProjectCard projectName="Accounting Software" finishedDate="invalid" description="This is a Business project for IBS" company="IBS " type="IBS" link="#"/>
            </div>
            
        </div>
    )
}

export default Projects
