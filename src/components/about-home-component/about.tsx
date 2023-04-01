import React, { FunctionComponent } from 'react';
import { AiOutlineSend } from "react-icons/ai";
import { Link } from 'react-scroll';
import './about.scss';

const About: FunctionComponent = () => {
    return(
        <div className="contain-about" >
            <div>
                <p>Hi, I' am Lionel</p>
                <p>Frontend developer</p>
                <p>High level experience in web design and development knowledge, producing quality work</p>
                <p><Link activeClass="active-icon" smooth spy to="contactme"><button><span>Me Contacter</span><AiOutlineSend/></button></Link></p>
            </div>
            <div>
                <div>
                    
                </div>
            </div>
            {/* <div><div><hr /></div> Scroll down <AiOutlineArrowDown/></div> */}
        </div>
    )
}

export default About;