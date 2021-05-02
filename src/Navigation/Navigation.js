import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className="navigation" id="navigation">
            <h3 className="navigation__logo"><a href="/">TumiDev</a></h3>

            <nav>
                <ul className="navigation__link">
                    <l1 className="navigation__link"><a className="items" href="#skills">Skills</a></l1>
                    <l1 className="navigation__link"><a href="#projects" className="items">Projects</a></l1>
                    <l1 className="navigation__link"><a className="items" href="#about">About</a></l1>
                    <l1 className="navigation__link"><a className="items" href="#resume">Resume</a></l1>
                    <l1 className="navigation__link"><a className="items" href="#contacts">Contacts</a></l1>
        
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
