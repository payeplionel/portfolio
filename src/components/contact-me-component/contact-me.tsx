import React, { FunctionComponent, useState } from "react";
import './contact-me.scss';
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Contactme: FunctionComponent = () => {
    const [copied, setIsCopied] = useState(false);
    const [alertText, setAlerText] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [project, setProject] = useState("");
    const [projectError, setProjectError] = useState("");
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");
    const [textSend, setTextSend] = useState("Send");

    async function copyTextToClipboard(text: string, alert: string) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = (copyText: string, alert: string) => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText, alert)
            .then(() => {
                // If successful, update the isCopied state value
                setAlerText(alert);
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const onSendMail = () => {
        if (name.trim() === '') {
            setNameError('Please enter your name');
        } else {
            setNameError('');
        }

        if (project.trim() === '') {
            setProjectError('Please enter the project');
        } else {
            setProjectError('')
        }

        if (message.trim() === '') {
            setMessageError('Please enter the message');
        } else {
            setMessageError('');
        }

        if (email.trim() === '') {
            setEmailError('Please enter your e-mail');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError('E-mail is not valaible');
        } else {
            setEmailError('')
        }
        if (nameError.length === 0 && projectError.length === 0 && messageError.length === 0 && email.trim() !== '') {
            if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
                setTextSend("Envoie en cours ...");

                setTimeout(() => {
                    setTextSend("Message send");
                    setTimeout(() => {
                        setTextSend("Send");
                    }, 1500);
                }, 1500);
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: "name : " + name + " email : " + email + " project : " + project + " message : " + message
                };
                fetch('https://ntfy.sh/portfoliontfylionelid22mars20231204', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        setAlerText("mail send");
                        setIsCopied(true);
                        setTimeout(() => {
                            setIsCopied(false);
                        }, 1500);
                    })
                    .catch(error => console.log(error));
            }
        }
    }

    return (
        <div className="contain-contact-me" id="contactme">
            <div>Contact Me</div>
            <div>Get in touch</div>
            <div>
                <div>
                    <div className="contact-items">
                        <div>
                            <span><BsTelephone size={25} /></span>
                        </div>
                        <div onClick={() => handleCopyClick("07 68 38 54 21", "number copied!")} >
                            <div>
                                Call Me
                            </div>
                            <div>
                                07 68 38 54 21
                            </div>
                        </div>
                    </div>
                    <div className="contact-items">
                        <div>
                            <span><AiOutlineMail size={25} /></span>
                        </div>
                        <div onClick={() => handleCopyClick("payeplionel@outlook.com", "mail copied!")}>
                            <div>
                                Email
                            </div>
                            <div>
                                payeplionel@outlook.com
                            </div>
                        </div>
                    </div>
                    <div className="contact-items">
                        <div>
                            <span><CiLocationOn size={25} /></span>
                        </div>
                        <div>
                            <div>
                                Location
                            </div>
                            <div>
                                France - Limoges
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="form-section">
                        <div>
                            <div className="input-section">
                                <input type="text" id="name" name="name" placeholder="Name" value={name}
                                    onChange={(e) => setName(e.target.value)} className={nameError ? 'is-invalid' : 'valid'} required />
                                <span>{nameError}</span>
                            </div>
                            <div className="input-section">
                                <input type="text" id="email" name="email" placeholder="Email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} className={emailError ? 'is-invalid' : 'valid'} required />
                                <span>{emailError}</span>
                            </div>
                        </div>
                        <div className="input-section">
                            <input type="text" id="project" name="project" placeholder="Project" value={project}
                                onChange={(e) => setProject(e.target.value)} className={projectError ? 'is-invalid' : 'valid'} required />
                            <span>{projectError}</span>
                        </div>
                        <div className="input-section">
                            <textarea id="message" name="message" rows={5} cols={50} placeholder="Message"
                                onChange={(e) => setMessage(e.target.value)} className={messageError ? 'is-invalid' : 'valid'} value={message} required />
                            <span>{messageError}</span>
                        </div>
                        <div>
                            <button disabled={(name && email && project && message) ? false : true} className={(name && email && project && message) ? '' : 'disabled-button'} onClick={onSendMail}><b>{textSend}</b></button>
                        </div>
                    </div>
                </div>
            </div>
            {copied && <div className="copied">{alertText}</div>}
        </div>
    )
}

export default Contactme;