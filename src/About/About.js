import React, {useEffect} from 'react'
import './About.css'
import Aos from "aos"
import "aos/dist/aos.css"

function About() {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    
    return (
        <div className="about">
            <h1 className="about__header">About Me!</h1>
            <div className="about__information">
                <img data-aos="fade-right" className="about__img" src={process.env.PUBLIC_URL + "/Hacker.svg"} alt=" "/>
                <p data-aos="fade-left" className="about__paragraph">
                    I am a Self-taught Full Stack developer with the passion to build amazing software, web applications and mobile Applications.
                    I started learning programming 2019 while I was still at the University of Witswatersrand with the aim of becoming the best Game developer 
                    in Unity Game Engine and Unreal Engine.{"\u{1F60F}"} Unfortunately couldn't continue because of certain circumstances.
                    I then met software development and decided to try it out. I loved it ever since {"\u{1F60D}"} 
                </p>
            </div>


        </div>
    )
}

export default About
