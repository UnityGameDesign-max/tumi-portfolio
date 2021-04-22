import React from 'react'
import './Contacts.css'

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { IconName } from "react-icons/fc";
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';




const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}))

function Contacts() {
    const classes = useStyles();

    return (
        <div className="contacts">
            <h1 className="contacts__bgText">Contacts</h1>
            <div className="all__contacts__icons">
                <div className="column__contacts">
                    <form className={classes.root} noValidate autoComplete="off" >
                        
                    
                        <TextField id="filled-basic" label="Name" variant="filled" />
                        <TextField id="filled-basic" label="Email" variant="filled" />
                        <div className="row__text">
                            <TextField id="filled-basic" multiline rows={5} columns={5} label="Message" variant="filled" />
                        </div>

                        <button className="submit__button">Send Message!</button>

                        
            

                    </form>
                </div>

                <div className="contact__icons">
                    <IconButton>
                        <a href="https:github.com/UnityGameDesign-max">
                            <GitHubIcon className="github__icons" />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="#">
                            <LinkedInIcon className="linkedin__icons" />    
                        </a>
                    </IconButton>
                    
                    <IconButton>
                        <a href="#">
                            <TwitterIcon className="twitter__icons" />
                        </a>
                    </IconButton>
                    

                </div>
            </div>
            
        </div>
    )
}

export default Contacts
