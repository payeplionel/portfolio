import React, { FunctionComponent, useState } from 'react';
import './home.scss';
import moon from '../../assets/moon.gif';
import sun from '../../assets/sun.gif';
import Social from '../social-home-component/social';
import About from '../about-home-component/about';
import Introduction from '../introduction/introduction';
import Skills from '../skills-component/skills';


const Home: FunctionComponent = () => {
    const [isDarkMode, setDarkMode] = useState<boolean>(false);

    const modeSwitch = () =>{
        setDarkMode(!isDarkMode);
    }

    return (
        <div className="container">
            <div className="contain">
                <div>
                    <div>
                        <span>Lionel</span>
                    </div>
                    <div className="nav-items">
                        <span>Home</span>
                        <span>About</span>
                        <span>Skills</span>
                        <span>Portfolio</span>
                        <span>Contactme</span>
                        <span onClick={modeSwitch}>
                            {isDarkMode ? (
                                <img src={sun} alt="Logo" width={35}/>
                            ):
                            (
                                <img src={moon} alt="Logo" width={35}/>
                            )
                        }
                        </span>
                    </div>
                </div>
                <div>
                    <div className="personnal" id="section-1">
                        <div>
                            <Social/>
                        </div>
                        <div>
                            <About/>    
                        </div>
                    </div>
                    <div className="about-me" id="section-2">
                        <div>
                            <Introduction/>
                        </div>
                    </div>
                    <div className="skills" id="section-3">
                        <div>
                            <Skills/>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="home">
            </div>
        </div>
    )
}

export default Home;