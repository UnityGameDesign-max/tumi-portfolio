import React, {useEffect} from 'react'
import './Skills.css'
import Aos from "aos"
import "aos/dist/aos.css"

function Skills() {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    return (
        <div className="skills">
            <h3 className="skills__text">The Featured Skills</h3>
            <h2 className="skills__tech">Modern Technology stacks</h2>
            <p className="skills__paragraph">
                These are technologies I have experience with, and some I have created multiple projects with them.
            
            </p>
            
            <div className="st__row__skill">
                <img data-aos="fade-down"  className="python"  src={process.env.PUBLIC_URL + "/Rd2c3b4ad5e2def7850e616ccdb697dbb.png"} />
                <img data-aos="fade-down" className="react" src={process.env.PUBLIC_URL + "/react-logo-1000-transparent_promote.png"} />
                <img data-aos="fade-left" className="nodejs" src={process.env.PUBLIC_URL + "/nodejs-1-logo.png"} />
                <img data-aos="fade-left" className="github" src={process.env.PUBLIC_URL + "/R1873d04ef913dd3a8269dcef5af09916.png"} />
            
            </div>

            <div className="nd__row__skill">
                <img data-aos="fade-right" className="mysql" src={process.env.PUBLIC_URL + "/mysql-logo-png-transparent.png"} />
                <img data-aos="fade-right" className="mongodb" src={process.env.PUBLIC_URL + "/R3851cc047b9284b97c521cc1a7d8a512.png"} />
                <img data-aos="fade-up" className="firebase" src={process.env.PUBLIC_URL + "/logo_firebase_1920px_clr.png"} />
                <img data-aos="fade-up" className="htmlCssJavaScript" src={process.env.PUBLIC_URL + "/R84a29ffe04d5a9991b1ffc000df4781d.png"} />
            
            
            </div>
            
            
        </div>
    )
}

export default Skills
