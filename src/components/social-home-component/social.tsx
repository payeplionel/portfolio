import { FunctionComponent, useEffect } from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import './social.scss';

const Social: FunctionComponent = () => { 
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: "Quelqu'un a visité ton portfolio 😊"
        };
        fetch('https://ntfy.sh/portfoliontfylionelid22mars20231204visit', requestOptions)
            .then(response => response.json())
            .catch(error => console.log(error));
    }, []);
    const socialVisit = (social: string) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `Quelqu'un a cliqué sur une icone ${social} 🎯`
        };
        fetch('https://ntfy.sh/portfoliontfylionelid22mars20231204visit', requestOptions)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    return (
        <div className="container-social" id='personnal'>
            <span><a onClick={() => socialVisit("linkedin")} href='https://www.linkedin.com/in/lionel-payep'><FaLinkedinIn /></a></span>
            <span><a onClick={() => socialVisit("github")} href='https://github.com/payeplionel'><FaGithub /></a></span>
            <span><a onClick={() => socialVisit("mail")} href='mailto:payeplionel@outlook.com'><HiMail /></a></span>
        </div>
    )
}

export default Social;