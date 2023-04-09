import { FunctionComponent, useEffect } from "react";
import './modal.scss';
// import sellmate from "../../assets/videos/sellmate.mp4";

interface ModalProps {
    handleClose: () => void;
    show: boolean;
    headerModal: string;
    titleModal: string;
    contentModal: string[];
    contentNextModal: string[];
}

const Modal: FunctionComponent<ModalProps> = ({ show, handleClose, headerModal, titleModal, contentModal, contentNextModal }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    const goToSite = () => {
        if (headerModal === "SellMate") {
            window.location.assign("https://sellmate-rho.vercel.app/")
        }
        if (headerModal === "Portfolio") {
            window.location.assign("https://www.lionelpayep.com/")
        }
    }
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `Quelqu'un a visité ton site ${headerModal} 📲`
        };
        fetch('https://ntfy.sh/portfoliontfylionelid22mars20231204visit', requestOptions)
            .then(response => response.json())
            .catch(error => console.log(error));
    }, [headerModal])

    return (
        <div>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <div className="modal-contain">
                        <div>
                            <h2>{headerModal}</h2>
                        </div>
                        <div>
                            {headerModal === "SellMate" &&
                                <video controls>
                                    <source src="./videos/sellmate.mp4" type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            }
                            {headerModal === "Portfolio" &&
                                <video controls>
                                    <source src="./videos/portfolio.mp4" type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            }
                            {headerModal === "Powerpoint" &&
                                <video controls>
                                    <source src="./videos/powerpoint.mp4" type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            }
                        </div>
                        <div>
                            <span>{titleModal}</span>
                            <div>
                                <span className="tag">
                                    <a href="/#">Fonctionnalités présentes</a>
                                </span>
                                <ul >
                                    {(contentModal !== undefined) &&
                                        contentModal.map((content, index) =>
                                            <li key={index}>{content}</li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div>
                                <span className="tag">
                                    <a href="/#">A venir</a>
                                </span>
                                <ul>
                                    {(contentNextModal !== undefined) &&
                                        contentNextModal.map((content, index) =>
                                            <li key={index}>{content}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleClose}>Fermer</button>
                            <button onClick={goToSite}>Voir</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Modal;