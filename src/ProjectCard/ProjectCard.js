import React, {useEffect} from 'react'
import './ProjectCard.css'
import Aos from "aos"
import "aos/dist/aos.css"

function ProjectCard({projectName, finishedDate, company, type, link, description}) {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="project__card">
            <h1 className="project__card__header">{projectName}</h1>
            <div className="project__card__details">
                <p className="project__info"><strong>Finished on:</strong>{finishedDate}</p>
                <p className="project__info"><strong >Company:</strong>{company}</p>
                <p className="project__info"><strong>Type:</strong>{type}</p>
            </div>

            <h4>{description}</h4>

            <a href={link} className="project__link">{"View The Project \u{1F448}"}</a>
            
        </div>
    )
}

export default ProjectCard
