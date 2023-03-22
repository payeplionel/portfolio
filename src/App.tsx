import './App.scss';
import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-scroll';
import { BrowserRouter } from 'react-router-dom';
import moon from './assets/images/moon.gif';
import sun from './assets/images/sun.gif';
import Social from './components/social-home-component/social';
import About from './components/about-home-component/about';
import Introduction from './components/introduction/introduction';
import Skills from './components/skills-component/skills';
import Projets from './components/projects-component/projets';
import Contactme from './components/contact-me-component/contact-me';
import { AiFillExperiment, AiFillHome, AiOutlineExperiment, AiOutlineHome } from 'react-icons/ai';
import { BsFillPatchQuestionFill, BsPatchQuestion, BsPersonBadge, BsPersonBadgeFill } from 'react-icons/bs';
import { GoMailRead } from 'react-icons/go';
import { CiMail } from 'react-icons/ci';

const App: FunctionComponent = () => {
  const [isdarkmode, setdarkmode] = useState<boolean>(false);
  const [section, setSection] = useState<number>(1);


  const modeSwitch = () => {
    setdarkmode(!isdarkmode);
  }

  const onEnterSection = (section: number) => {
    setSection(section);
  }

  return (
    <BrowserRouter>
      <nav>
        <div>
          <span>Lionel</span>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="personnal">
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="introduction">
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="skills">
                Skills
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="project">
                Portfolio
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="conctactme">
                Contactme
              </Link>
            </li>
            <span onClick={modeSwitch}>
              {isdarkmode ? (
                <img src={sun} alt="Logo" width={35} />
              ) :
                (
                  <img src={moon} alt="Logo" width={35} />
                )
              }
            </span>
          </ul>
        </div>
      </nav>

      <div>
        <div className="personnal">
          <div>
            <Social />
          </div>
          <div>
            <About />
          </div>
        </div>
        <div className="about-me">
          <div>
            <Introduction />
          </div>
        </div>
        <div className="skills">
          <div>
            <Skills />
          </div>
        </div>
        <div className="projects">
          <div>
            <Projets />
          </div>
        </div>
        <div className="get-contact">
          <div>
            <Contactme />
          </div>
        </div>
      </div>
      <nav className="nav-items-mobile">
        <ul>
          <li>
            <Link activeClass="active-icon" smooth spy to="personnal" onClick={() => onEnterSection(1)}>
              {section === 1 ? <AiFillHome size={30}/> : <AiOutlineHome size={30} />}
            </Link>
          </li>
          <li>
            <Link activeClass="active-icon" smooth spy to="introduction" onClick={() => onEnterSection(2)}>
              {section === 2 ? <BsFillPatchQuestionFill size={30}/> : <BsPatchQuestion size={30} />}
            </Link>
          </li>
          <li>
            <Link activeClass="active-icon" smooth spy to="skills" onClick={() => onEnterSection(3)}>
              {section === 3 ? <BsPersonBadgeFill size={30} /> : <BsPersonBadge size={30} />}
            </Link>
          </li>
          <li>
            <Link activeClass="active-icon" smooth spy to="project" onClick={() => onEnterSection(4)}>
              {section === 4 ? <AiFillExperiment size={30}/> : <AiOutlineExperiment size={30} />}
            </Link>
          </li>
          <li>
            <Link activeClass="active-icon" smooth spy to="conctactme" onClick={() => onEnterSection(5)}>
              {section === 5 ? <GoMailRead size={30}/> : <CiMail size={30} />}
            </Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  )
}

export default App;
