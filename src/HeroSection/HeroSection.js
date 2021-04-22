import React from 'react'
import './HeroSection.css'
import Typical from 'react-typical'



function HeroSection() {
    return (
        <div className="hero__section">
            <div className="hero__img">
                <img className="hero__section__img" src={process.env.PUBLIC_URL + "/HtmlCssJs.svg" }  alt=""/>
            </div>

            <div className="hero__text">
                <h1 className="hero__section__text">Real World Web Applications!</h1>

                <h3 className="intro__text">
                    <Typical 
                    steps={['I am an enthusiastic programmer!\u{1F913}', 1000, 'I am a Full Stack Developer!\u{1F4BB}', 500]} 
                    loop={Infinity}
                    />
                
                </h3>
        
                <div className="hiring">
                    <p className="hire-me__text">Hire Tumelo</p> 
                    <span>{"\u{1F447}"}</span>
                </div>
                
                <button className="discover__btn">Discover Me!</button>
            </div>
        </div>
    )
}

export default HeroSection 

