import { FunctionComponent, useState } from "react";
import './projets.scss';
import Modal from "../modal/modal";

const Projets: FunctionComponent = () => {
    const [isHoverSellmate, setHoverSellmate] = useState<boolean>(false);
    const [isHoverPortfolio, setHoverPortfolio] = useState<boolean>(false);
    const [isHoverPowerpoint, setHoverPowerpoint] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);
    const [headerModal, setHeaderModel] = useState("");
    const [titleModal, setTitleModel] = useState("");
    const [contentModal, setContentModel] = useState([""]);
    const [contentNextModal, setContentNextModel] = useState([""]);

    const handleClose = () => setShowModal(false);
    const handleShow = (projectName: string) => {
        setShowModal(true);
        setHeaderModel(projectName);
        if(projectName==="SellMate"){
            setTitleModel("SellMate est un template application web.");
            setContentModel(["Interface de présentation complète (Produits, Services, etc...).",
            "Interface de connexion et d'authentification.", "Illustrations des services."]);
            setContentNextModel(["Tableau de bord de gestion de données."]);
        }
        if(projectName==="Portfolio"){
            setTitleModel("Portfolio est un portfolio 🤭.");
            setContentModel(["Je vous montre qui je suis. 😊.",
            "Présentation de mes projets.", "Prise de contact."]);
            setContentNextModel(["Ajout d'un projet Flutter."]);
        }
        if(projectName==="Powerpoint"){
            setTitleModel("Powerpoint est un template de présentation PowerPoint pour un stage académique.");
            setContentModel(["Présentation de l'entreprise d'accueil.",
            "Déroulement du stage.", "Présentation des missions."]);
            setContentNextModel(["Remplissage de données par défaut."]);
        }
    }
    const HoverSellmate = (state: boolean) => {
        setHoverSellmate(state);
    }
    const HoverPortfolio = (state: boolean) => {
        setHoverPortfolio(state);
    }
    const HoverPowerpoint = (state: boolean) => {
        setHoverPowerpoint(state);
    }

    return (
        <div className="contains-projets" id="project">
            <div>Projets</div>
            <div>Une partie des projets sur lesquels j'ai travaillé</div>
            <div>
                <section className="sellmate-projet"
                    onMouseEnter={() => HoverSellmate(true)}
                    onMouseLeave={() => HoverSellmate(false)}
                    onClick={() => handleShow("SellMate")}>
                    <div></div>
                    <div><span>SellMate</span></div>
                </section>
                <section className="portfolio-projet" onMouseEnter={() => HoverPortfolio(true)}
                    onMouseLeave={() => HoverPortfolio(false)} onClick={() => handleShow("Portfolio")}>
                    <div></div>
                    <div><span>Portfolio</span></div>
                </section>
                <section onMouseEnter={() => HoverPowerpoint(true)}
                    onMouseLeave={() => HoverPowerpoint(false)} onClick={() => handleShow("Powerpoint")}>
                    <div className="powerpoint-projet"></div>
                    <div><span>PowerPoint</span></div>
                </section>
                
            </div>
            {(isHoverSellmate || isHoverPortfolio || isHoverPowerpoint) &&
                <section className="list-utils">
                    <div className={`${isHoverSellmate && "sellMate-div-1"} ${isHoverPortfolio && "portfolio-div-1"} ${isHoverPowerpoint && "pwp-div-1"}`}>
                        <div></div>
                        {isHoverSellmate && <div>Angular</div>}
                        {isHoverPortfolio && <div>React</div>}
                        {isHoverPowerpoint && <div>Powerpoint</div>}
                    </div>
                    <div className={`${isHoverSellmate && "sellMate-div-2"} ${isHoverPortfolio && "portfolio-div-2"}`}>
                        <div></div>
                        {isHoverSellmate && <div>TypeScript</div>}
                        {isHoverPortfolio && <div>TypeScript</div>}
                    </div>
                    <div className={`${isHoverSellmate && "sellMate-div-3"} ${isHoverPortfolio && "portfolio-div-3"}`}>
                        <div></div>
                        {isHoverSellmate && <div>SCSS</div>}
                        {isHoverPortfolio && <div>SCSS</div>}
                    </div>
                    <div></div>
                </section>
            }
            <Modal show={showModal} handleClose={handleClose} headerModal={headerModal} titleModal={titleModal}
            contentModal={contentModal} contentNextModal={contentNextModal}/>
        </div>
    )
}

export default Projets;