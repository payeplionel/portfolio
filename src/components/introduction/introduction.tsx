import React, { FunctionComponent } from "react";
import './introduction.scss';
import { BsCloudDownload } from "react-icons/bs";

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
            <div>About Me</div>
            <div>My introduction</div>
            <div>
                <div></div>
                <div>
                    <section>Web developer, with extensible knowledge and years of experience, working in web
                        technologies and Ui / Ux design, delevering quality work.
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