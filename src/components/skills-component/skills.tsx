import React, { FunctionComponent, useState } from "react";
import './skills.scss';
import { BiBriefcaseAlt2, BiBookBookmark } from "react-icons/bi";
import { BsCalendar2Range } from "react-icons/bs";

const Skills: FunctionComponent = () => {

    const [isEducation, setIsEducation] = useState<boolean>(true);

    const modeJourney = (type: boolean) => {
        setIsEducation(type);
    }

    return (
        <div className="contain-skills" id="skills">
            <div>Qualification</div>
            <div>My personnal journey</div>
            <div>
                <section>
                    <p onClick={() => modeJourney(true)} className={`${isEducation ? "selected" : ""}`}><BiBookBookmark /> <span>Éducation</span> </p>
                    <p onClick={() => modeJourney(false)} className={`${isEducation ? "" : "selected"}`}><BiBriefcaseAlt2 /> <span>Expériences</span>  </p>
                </section>
                <section>
                    <div>
                        <div className={`${isEducation ? "education-show-1" : "education-hide"}`}>
                            <div>
                                <p>Ingénieur informatique</p>
                                <p>3iL ingénieurs</p>
                                <p><BsCalendar2Range /> 09/2021 - Présent</p>
                            </div>
                        </div>
                        <div className={`${isEducation ? "work-hide" : "work-show-1"}`}>
                            <div>
                                <p>Alternant</p>
                                <p>Groupe Ubique</p>
                                <p><BsCalendar2Range /> 09/2022 - présent</p>
                            </div>
                        </div>
                        <div></div>
                        <div>
                            <div className={`${isEducation ? "work-hide" : "work-show-3"}`}>
                                <p>Stagiaire</p>
                                <p>IT & IoT for Development</p>
                                <p><BsCalendar2Range /> 09/2020 - 02/2021</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div>
                            <span className={`${isEducation ? "work-step-span" : "work-visible-span-1"}`}></span>
                            {/* éducation */}
                            <span className={`${isEducation ? "work-visible-span-1" : "work-step-span"}`}></span>
                            <hr className={`${isEducation ? "work-step-hr" : "work-visible-hr-1"}`} />
                            {/* éducation */}
                            <hr className={`${isEducation ? "work-visible-hr-1" : "work-step-span"}`} />
                            {/* éducation */}
                            <span className={`${isEducation ? "work-step-span" : "work-visible-span-2"}`}></span>

                            <span className={`${isEducation ? "work-visible-span-2" : "work-step-span"}`}></span>
                            <hr className={`${isEducation ? "work-step-hr" : "work-visible-hr-2"}`} />
                            <span className={`${isEducation ? "work-step-span" : "work-visible-span-3"}`}></span>
                            {/* <hr className={`${isEducation ? "work-step-hr" : "work-visible-hr-3"}`} />
                            <span className={`${isEducation ? "work-step-span" : "work-visible-span-4"}`}></span> */}
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <div className={`${isEducation ? "education-show-2" : "education-hide"}`}>
                                <p>Ingénieur Informatique et Systèmes d'informations</p>
                                <p>Institut Saint Jean</p>
                                <p><BsCalendar2Range /> 09/2017 - 06/2021</p>
                            </div>
                            <div className={`${isEducation ? "work-hide" : "work-show-2"}`}>
                                <p>Stagiaire</p>
                                <p>Centre de Simulation Virtuelle en Santé (CSVS)</p>
                                <p><BsCalendar2Range /> 04/2022 - 08/2022</p>
                            </div>
                        </div>
                        <div></div>
                        {/* <div>
                            <div className={`${isEducation ? "work-hide" : "work-show-4"}`}>
                                <p>Stagiaire</p>
                                <p>IT & IoT for Development</p>
                                <p><BsCalendar2Range/> 09/2020 - 02/2021</p>
                            </div>
                        </div> */}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills;