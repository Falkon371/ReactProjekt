import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Box, IconButton, Button, MenuItem} from "@mui/material"
import Person2Icon from '@mui/icons-material/Person2';
import MailLockIcon from '@mui/icons-material/MailLock';
import LockIcon from '@mui/icons-material/Lock';
import './LoginStyle.css'


const Login = () => {

    const [action, setAction] = useState('Sign Up');

    return(
        <div className="container">
            <div className="header">
                <div className="text" >Login</div>
                <div className="underline"></div>
            </div>
            <div></div>
            
            <div className="inputs">

            <div className="input">
                <IconButton>
                    <MailLockIcon/>
                </IconButton>
                <input type="email" placeholder="Email"/>
            </div>

            <div className="input">
                <IconButton>
                    <LockIcon/>
                </IconButton>
                <input type="password" placeholder="Password"/>
            </div>
            </div>

            <div className="forgot-password">Lost Password?  <span style={{cursor: "pointer", color: "#4c00dc"}}> Click Here!</span></div>

            <div className="submit-container">
                <div  className="submit">
                <Button sx={{color: "white",
                     background: "black",
                     borderRadius: "50px",
                     fontSize: "15px",
                    fontWeight: "500",
                     width: "120px",
                     height: "60px"
                }}
                component={Link} to="/register"
                >Sign Up</Button>
                </div>

                <div className="submit">
                    <Button sx={{color: "white",
                        background: "black",
                        borderRadius: "50px",
                        fontSize: "15px",
                        fontWeight: "500",
                        width: "120px",
                        height: "60px"
                    }}>Login</Button>
                </div>
            </div>
        </div>
    )
}


export default Login


