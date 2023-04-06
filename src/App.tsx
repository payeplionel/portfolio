import './App.scss';
import { FunctionComponent, useState } from 'react';
import { Link } from 'react-scroll';
import { BrowserRouter } from 'react-router-dom';
import moon from './assets/images/moon.gif';
import home from './assets/icons/home.png';
import compass from './assets/icons/compass.png';
import email from './assets/icons/email.png';
import user from './assets/icons/user.png';
import idea from './assets/icons/output-onlinegiftools.gif';
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
                ACCUEIL
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="introduction">
                À PROPOS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="skills">
                COMPÉTENCES
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="project">
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contactme">
                CONTACT
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
              <img src={home} width={25} alt='home'/>
            </Link>
          </li>
          <li>
            <Link activeClass="active-icon" smooth spy to="introduction" onClick={() => onEnterSection(2)}>
              <img src={compass} width={30} alt='discover'/>
            </Link>
          </li>
          <li>
            <Link activeClass="active-icon" smooth spy to="skills" onClick={() => onEnterSection(3)}>
              <img src={user} width={25} alt='user'/>
            </Link>
          </li>
          <li>
            <Link activeClass="active-icon" smooth spy to="project" onClick={() => onEnterSection(4)}>
              <img src={idea} width={35} alt='user'/>
            </Link>
          </li>
          <li>
            <Link activeClass="active-icon" smooth spy to="contactme" onClick={() => onEnterSection(5)}>
              <img src={email} width={25} alt='mail'/>
            </Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  )
}

export default App;
