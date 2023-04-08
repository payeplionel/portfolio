import { FunctionComponent } from 'react';
import { AiOutlineSend } from "react-icons/ai";
import { Link } from 'react-scroll';
import './about.scss';

const About: FunctionComponent = () => {
    return(
        <div className="contain-about" >
            <div>
                <p>Salut, Je suis Lionel</p>
                <p>Développeur web</p>
                <p>Je suis un développeur web, passionné par la conception et la réalisation d'applications.</p>
                <p><Link activeClass="active-icon" smooth spy to="contactme"><button><span>Me Contacter</span><AiOutlineSend/></button></Link></p>
            </div>
            <div>
                <div>
                    
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            {/* <div><div><hr /></div> Scroll down <AiOutlineArrowDown/></div> */}
        </div>
    )
}

export default About;