import { Button } from '@material-ui/core'
import React from 'react'
import './Resume.css'

function Resume() {
    return (
        <div className="resume">
            <h1 className="resume__header">Resume</h1>
            <div className="resume__info">
                <img className="resume__img" src={process.env.PUBLIC_URL + "Resume.svg"} alt=" "/>
                <div className="resume__button__paragraph">
                    <p className="resume__paragraph">This is the Resume of Tumelo Mahlangu that contains all the information about skills, interests and qualifications</p>
                    <button className="resume__button">View my Resume</button>
                </div>
            </div>
            
            
        </div>
    )
}

export default Resume
