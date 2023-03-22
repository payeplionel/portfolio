import React, { FunctionComponent, useState } from "react";
import './contact-me.scss';
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Contactme: FunctionComponent = () => {
    const [copied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text: string) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = (copyText: string) => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
          .then(() => {
            // If successful, update the isCopied state value
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
      }

    return(
        <div className="contain-contact-me" id="conctactme">
            <div>Contact Me</div>
            <div>Get in touch</div>
            <div>
                <div>
                    <div className="contact-items">
                        <div>
                            <span><BsTelephone size={25}/></span>
                        </div>
                        <div onClick={() =>handleCopyClick("07 68 38 54 21")} >
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
                            <span><AiOutlineMail size={25}/></span>
                        </div>
                        <div onClick={() =>handleCopyClick("payeplionel@outlook.com")}>
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
                            <span><CiLocationOn size={25}/></span>
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
                    <div className="form-contact">
                        <div>
                            <div>
                                <input type="text" id="name" name="name" placeholder="Name" required/>
                            </div>
                            <div>
                                <input type="text" id="email" name="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div>
                            <input type="text" id="project" name="project" placeholder="Project" required/>
                        </div>
                        <div>
                            <textarea id="message" name="message" rows={5} cols={50} placeholder="Message" required/>
                        </div>
                        <div>
                            <button><b>Send message </b></button>
                        </div>
                    </div>
                </div>
            </div>
            {copied && <div className="copied">Copied!</div>}
        </div>
    )
}

export default Contactme;