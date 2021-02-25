import React from 'react'
import './HeroSection.css'
import Typical from 'react-typical'
import HeroBg from '../HeroBg/HeroBg'
import  Player  from 'video-react';


function HeroSection() {
    return (
        <div className="hero__section">

            <img className="hero__section__img" src={process.env.PUBLIC_URL + "server__svg.png" }  alt=""/>
            
            <h1 className="hero__section__text">Real World Software and Web Applications</h1>

            <h3 className="intro__text">
                <Typical 
                steps={['I am an enthusiastic programmer!\u{1F913}', 1000, 'I am a Full Stack Developer!\u{1F4BB}', 500]} 
                loop={Infinity}
                />
            
            </h3>
       
            <p className="hire-me__text">{"Hire Tumelo \u{1F447}"}</p>

            <button className="discover__btn">Discover Me!</button>

        </div>
    )
}

export default HeroSection 

