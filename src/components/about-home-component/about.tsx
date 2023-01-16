import React, { FunctionComponent } from 'react';
import { AiOutlineSend, AiOutlineArrowDown } from "react-icons/ai";
import './about.scss';

const About: FunctionComponent = () => {
    return(
        <div className="contain-about">
            <div>
                <p><h1>Hi, I' am Lionel</h1></p>
                <p><h2>Frontend developer</h2></p>
                <p>High level experience in web design and development knowledge, producing quality work</p>
                <p><button><span>Contact me</span>   <AiOutlineSend/></button></p>
            </div>
            <div>
                <div>
                    
                </div>
            </div>
            <div><div><hr /></div> Scroll down <AiOutlineArrowDown/></div>
        </div>
    )
}

export default About;