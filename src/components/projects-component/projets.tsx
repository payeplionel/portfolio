import React, { FunctionComponent, useState } from "react";
import './projets.scss';

const Projets: FunctionComponent = () => {
    const [isHoverSellmate, setHoverSellmate] = useState<boolean>(false);
    const [isHoverPortfolio, setHoverPortfolio] = useState<boolean>(false);
    const [isHoverPowerpoint, setHoverPowerpoint] = useState<boolean>(false);

    const HoverSellmate = (state:boolean) =>{
        setHoverSellmate(state);
    }
    const HoverPortfolio = (state:boolean) =>{
        setHoverPortfolio(state);
    }
    const HoverPowerpoint = (state:boolean) =>{
        setHoverPowerpoint(state);
    }

    const visitProject = (site: string) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `Quelqu'un a visité ton site ${site} 📲`
        };
        fetch('https://ntfy.sh/portfoliontfylionelid22mars20231204visit', requestOptions)
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    return(
        <div className="contains-projets" id="project">
            <div>Projets</div>
            <div>List of my projects</div>
            <div>
                <section className="sellmate-projet" 
                onMouseEnter={() =>HoverSellmate(true)} 
                onMouseLeave={() =>HoverSellmate(false)} >
                    <div></div>
                    <div><span>SellMate</span><button onClick={()=> visitProject("SellMate")}>Visit</button></div>
                </section>
                <section className="portfolio-projet" onMouseEnter={() =>HoverPortfolio(true)} 
                onMouseLeave={() =>HoverPortfolio(false)}>
                    <div>
                        <video controls>
                            <source src="/videos/portfolio.mp4" type="video/mp4"/>
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <div><span>Portfolio</span><button>Visit</button></div>
                </section>
                <section onMouseEnter={() =>HoverPowerpoint(true)} 
                onMouseLeave={() =>HoverPowerpoint(false)}>
                    <div className="powerpoint-projet"></div>
                    <div><span>PowerPoint</span><button onClick={()=> visitProject("PowerPoint")}>Visit</button></div>
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
        </div>
    )
}

export default Projets;