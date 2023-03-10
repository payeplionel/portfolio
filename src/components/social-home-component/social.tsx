import React, { FunctionComponent } from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import './social.scss';

const Social: FunctionComponent = () => {
    return(
        <div className="container">
            <span><FaLinkedinIn/></span>
            <span><FaGithub/></span>
            <span><HiMail/></span>
        </div>
    )
}

export default Social;