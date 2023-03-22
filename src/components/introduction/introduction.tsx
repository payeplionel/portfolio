import React, { FunctionComponent } from "react";
import './introduction.scss';
import { BsCloudDownload } from "react-icons/bs";

const Introduction: FunctionComponent = () => {
    return(
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
                            <span>Years experience</span>
                        </p>
                        <p>
                            <span>02+</span>
                            <span>Completed projects</span>
                        </p>
                      
                        <p>
                            <span>03+</span>
                            <span>Companies worked</span>  
                        </p>  
                    </section>
                    <section>
                        <button><b>Download CV  <BsCloudDownload/></b></button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Introduction;