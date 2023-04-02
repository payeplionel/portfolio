import { FunctionComponent } from "react";
import './modal.scss';

interface ModalProps {
    handleClose: () => void;
    show: boolean;
    children: React.ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({ show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div>
            <div className={showHideClassName}>
                <section className="modal-main">
                    {children}
                </section>
            </div>
        </div>
    )
}

export default Modal;