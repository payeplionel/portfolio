import React, { FunctionComponent, useState } from "react";
import './skills.scss';
import { BiBriefcaseAlt2, BiBookBookmark} from "react-icons/bi";
import { BsCalendar2Range } from "react-icons/bs";

const Skills: FunctionComponent = () => {

    const [isEducation, setIsEducation] = useState<boolean>(true);

    const modeJourney = (type:boolean) =>{
        setIsEducation(type);
    }

    return (
        <div className="contain-skills">
            <div>Qualification</div>
            <div>My personnal journey</div>
            <div>
                <section>
                    <p onClick={() => modeJourney(true)} className={`${isEducation ? "selected" : ""}`}><BiBookBookmark/> <span>Éducation</span> </p>
                    <p onClick={() => modeJourney(false)} className={`${isEducation ? "" : "selected"}`}><BiBriefcaseAlt2/> <span>Work</span>  </p>
                </section>
                <section>
                    <div>
                        <div className={`${isEducation ? "education-show-1" : "education-hide"}`}>
                            <div>
                                <p>Computer Engineer</p>
                                <p>Institut Saint Jean</p>
                                <p><BsCalendar2Range/> date</p>
                            </div>
                        </div>
                        <div className={`${isEducation ? "work-hide" : "work-show-1"}`}>
                            <div>
                                <p>Computer Engineer</p>
                                <p>Institut Saint Jean</p>
                                <p><BsCalendar2Range/> date</p>
                            </div>
                        </div>
                        <div></div>
                        <div>
                            <div className={`${isEducation ? "work-hide" : "work-show-3"}`}>
                                <p>Computer Engineer</p>
                                <p>Institut Saint Jean</p>
                                <p><BsCalendar2Range/> date</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div>
                            <span className={`${isEducation ? "work-step-span" : "work-visible-span-1"}`}></span>
                            {/* éducation */}
                            <span className={`${isEducation ? "work-visible-span-1" : "work-step-span"}`}></span>
                            <hr className={`${isEducation ? "work-step-hr" : "work-visible-hr-1"}`}/>
                            {/* éducation */}
                            <hr className={`${isEducation ? "work-visible-hr-1" : "work-step-span"}`}/>
                            {/* éducation */}
                            <span className={`${isEducation ? "work-step-span" : "work-visible-span-2"}`}></span>

                            <span className={`${isEducation ? "work-visible-span-2" : "work-step-span"}`}></span>
                            <hr  className={`${isEducation ? "work-step-hr" : "work-visible-hr-2"}`}/>
                            <span className={`${isEducation ? "work-step-span" : "work-visible-span-3"}`}></span>
                            <hr className={`${isEducation ? "work-step-hr" : "work-visible-hr-3"}`} />
                            <span className={`${isEducation ? "work-step-span" : "work-visible-span-4"}`}></span>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div>
                            <div className={`${isEducation ? "education-show-2" : "education-hide"}`}>
                                <p>Computer Engineer</p>
                                <p>Institut Saint Jean</p>
                                <p><BsCalendar2Range/> date</p>
                            </div>
                            <div className={`${isEducation ? "work-hide" : "work-show-2"}`}>
                                <p>Computer Engineer</p>
                                <p>Institut Saint Jean</p>
                                <p><BsCalendar2Range/> date</p>
                            </div>
                        </div>
                        <div></div>
                        <div>
                            <div className={`${isEducation ? "work-hide" : "work-show-4"}`}>
                                <p>Computer Engineer</p>
                                <p>Institut Saint Jean</p>
                                <p><BsCalendar2Range/> date</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills;