import React from 'react'
import './Contacts.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { IconName } from "react-icons/fc";




const styles = {
    largeIcon: {
        width: 60,
    },
};

function Contacts() {

    return (
        <div className="contacts">
            <h1 className="contacts__bgText">Contacts</h1>
            <div className="all__contacts__icons">
                <div className="column__contacts">
                    <a href="https://github.com/UnityGameDesign-max" ><GitHubIcon className="contacts__icons__github"  fontSize="large" /></a>
                    <LinkedInIcon className="contacts__icons__linkedin" fontSize="large" />
                    <div className="email__address">
                        <EmailIcon className="contacts__icons__email" fontSize="large" />
                        <small>tumie201511@gmail.com</small>
                    </div>
                    
                    <div className="phone__number">
                        <PhoneIcon className="contacts__icons__phone" fontSize="large" />
                        <small>+27 692 92602</small>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Contacts
