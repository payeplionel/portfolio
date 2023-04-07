import { FunctionComponent } from "react";
import './introduction.scss';
import { BsCloudDownload } from "react-icons/bs";
import balise from '../../assets/gifs/balise.gif';
import dev from '../../assets/gifs/deve.gif';
import dinner from '../../assets/gifs/dinner.gif';
import football from '../../assets/gifs/footbal.gif';
import holiday from '../../assets/gifs/holiday.gif';

const Introduction: FunctionComponent = () => {
    const downloadCV = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `Quelqu'un a téléchargé ton cv 📄`
        };
        fetch('https://ntfy.sh/portfoliontfylionelid22mars20231204visit', requestOptions)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    return (
        <div className="contain-introduction" id="introduction">
            <div>À PROPOS</div>
            <div>Parlons de moi</div>
            <div>
                <div>
                    <div>
                        <img src={dinner} width={25} alt='dinner'/>
                        <img src={balise} width={25} alt='balise'/>
                        <img src={dev} width={25} alt='dev'/>
                        <img src={football} width={25} alt='football'/>
                        <img src={holiday} width={25} alt='holiday'/>
                    </div>
                </div>
                <div>
                    <section>
                        Je suis un développeur web passionné par la création
                        des applications et sites web, motivé et toujours à la
                        recherche de nouvelles technologies pour m'améliorer ;
                        je suis prêt à relever de nouveaux défis.

                    </section>
                    <section>
                        <p>
                            <span>01+</span>
                            <span>Années d'expérience</span>
                        </p>
                        <p>
                            <span>02+</span>
                            <span>Projets portfolio</span>
                        </p>

                        <p>
                            <span>03+</span>
                            <span>Expériences professionnelles</span>
                        </p>
                    </section>
                    <section>
                        <a onClick={downloadCV} href="/cv/Lionel_PAYEP_CV.pdf" download="Lionel_PAYEP_CV">
                            <button><b>Voir Mon CV  <BsCloudDownload /></b></button>
                        </a>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Introduction;