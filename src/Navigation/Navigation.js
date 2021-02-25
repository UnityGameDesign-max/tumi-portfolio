import React from 'react'
import './Navigation.css'

function Navigation() {
    return (
        <div className="navigation">
            <h3 className="navigation__logo"><a href="/">TumiDev</a></h3>

            <nav>
                <ul className="navigation__link">
                    <l1 className="navigation__link"><a className="items" href="#">Skills</a></l1>
                    <l1 className="navigation__link"><a className="items" href="#">Projects</a></l1>
                    <l1 className="navigation__link"><a className="items" href="#">About</a></l1>
        
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
