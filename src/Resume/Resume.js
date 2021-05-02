import React from 'react'
import { Link } from 'react-router-dom'
import './Resume.css'
import myResume from '../Resume.pdf';



function Resume() {
    return (
        <div className="resume" id="resume">
            <h1 className="resume__header">Resume</h1>
            <div className="resume__info">
                <img className="resume__img" src={process.env.PUBLIC_URL + "/CV.svg"} alt=" "/>
                <div className="resume__button__paragraph">
                    <p className="resume__paragraph">This is the Resume of Tumelo Mahlangu that contains all the information about skills, interests and qualifications</p>
                    <a type="button" className="resume__button" href={myResume} download="Resume.pdf">Download</a>    
                    
                    
                </div>
                
            </div>

            
            
            
        </div>
    )
}

export default Resume
