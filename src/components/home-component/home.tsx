import React, { FunctionComponent, useState, useEffect } from 'react';
import './home.scss';
import moon from '../../assets/moon.gif';
import sun from '../../assets/sun.gif';
import Social from '../social-home-component/social';
import About from '../about-home-component/about';
import Introduction from '../introduction/introduction';
import Skills from '../skills-component/skills';
import Projets from '../projects-component/projets';
import Contactme from '../contact-me-component/contact-me';
import { AiFillHome,AiOutlineHome, AiOutlineExperiment, AiFillExperiment } from 'react-icons/ai';
import { BsFillPatchQuestionFill, BsPatchQuestion, BsPersonBadge, BsPersonBadgeFill} from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { GoMailRead } from 'react-icons/go';

const Homepage: FunctionComponent = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [isdarkmode, setdarkmode] = useState<boolean>(false);
    const [section, setSection] = useState<number>(1);

    const modeSwitch = () =>{
        setdarkmode(!isdarkmode);
    }

    const onEnterSection = (section: number) => {
        setSection(section);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      };

    return (
        <div className="container">
            <nav>
                <div>
                    <span>Lionel</span>
                </div>
                <div className="nav-items">
                    <ul>
                        <li><a href="#section-1" className={`${section === 1 ? 'selected' : ''}`} onClick={()=>onEnterSection(1)}>Home</a></li>
                        <li><a href="#section-2" className={`${section === 2 ? 'selected' : ''}`} onClick={()=>onEnterSection(2)}>About</a></li>
                        <li><a href="#section-3" className={`${section === 3 ? 'selected' : ''}`} onClick={()=>onEnterSection(3)}>Skills</a></li>
                        <li><a href="#section-4" className={`${section === 4 ? 'selected' : ''}`} onClick={()=>onEnterSection(4)}>Portfolio</a></li>
                        <li><a href="#section-5" className={`${section === 5 ? 'selected' : ''}`} onClick={()=>onEnterSection(5)}>Contactme</a></li>
                        <span onClick={modeSwitch}>
                            {isdarkmode ? (
                                <img src={sun} alt="Logo" width={35}/>
                            ):
                            (
                                <img src={moon} alt="Logo" width={35}/>
                            )
                            }
                        </span>
                    </ul>
                </div>
            </nav>
            <div className="contain">
                <div>
                    <div className="personnal" id="section-1" onMouseEnter={() => onEnterSection(1)}>
                        <div>
                            <Social/>
                        </div>
                        <div>
                            <About/>
                        </div>
                    </div>
                    <div className="about-me" id="section-2"  onMouseEnter={() => onEnterSection(2)}>
                        <div>
                            <Introduction/>
                        </div>
                    </div>
                    <div className="skills" id="section-3" onMouseEnter={() => onEnterSection(3)}>
                        <div>
                            <Skills/>
                        </div>
                    </div>
                    <div className="projets" id="section-4" onMouseEnter={() => onEnterSection(4)}>
                        <div>
                            <Projets/>
                        </div>
                    </div>
                    <div className="get-contact" id="section-5" onMouseEnter={() => onEnterSection(5)}>
                        <div>
                            <Contactme/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home">
            </div>
            <nav className="nav-items-mobile">
                <ul>
                    <li><a href="#section-1" className={`${section === 1 ? 'selected' : ''}`} onClick={()=>onEnterSection(1)}>{section===1 ? <AiFillHome size={30}/> : <AiOutlineHome size={30}/>} </a></li>
                    <li><a href="#section-2" className={`${section === 2 ? 'selected' : ''}`} onClick={()=>onEnterSection(2)}>{section===2 ? <BsFillPatchQuestionFill size={30}/> : <BsPatchQuestion size={30}/>}</a></li>
                    <li><a href="#section-3" className={`${section === 3 ? 'selected' : ''}`} onClick={()=>onEnterSection(3)}>{section===3 ? <BsPersonBadgeFill size={30}/> : <BsPersonBadge size={30}/>}</a></li>
                    <li><a href="#section-4" className={`${section === 4 ? 'selected' : ''}`} onClick={()=>onEnterSection(4)}>{section===4 ? <AiFillExperiment size={30}/> : <AiOutlineExperiment size={30}/>}</a></li>
                    <li><a href="#section-5" className={`${section === 5 ? 'selected' : ''}`} onClick={()=>onEnterSection(5)}>{section===5 ? <GoMailRead size={30}/> : <CiMail size={30}/>}</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Homepage;