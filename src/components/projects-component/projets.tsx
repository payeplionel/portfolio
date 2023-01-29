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

    return(
        <div className="contains-projets">
            <div>Projets</div>
            <div>List of my projects</div>
            <div>
                <section className="sellmate-projet" 
                onMouseEnter={() =>HoverSellmate(true)} 
                onMouseLeave={() =>HoverSellmate(false)} >
                    <div></div>
                    <div>SellMate</div>
                </section>
                <section className="portfolio-projet" onMouseEnter={() =>HoverPortfolio(true)} 
                onMouseLeave={() =>HoverPortfolio(false)}>
                    <div></div>
                    <div>Portfolio</div>
                </section>
                <section onMouseEnter={() =>HoverPowerpoint(true)} 
                onMouseLeave={() =>HoverPowerpoint(false)}>
                    <div className="powerpoint-projet"></div>
                    <div>PowerPoints</div>
                </section>
            </div>
            {(isHoverSellmate || isHoverPortfolio || isHoverPowerpoint) &&
                <section className="list-utils">
                    <div className={`${isHoverSellmate && "sellMate-div-1"} ${isHoverPortfolio && "portfolio-div-1"} ${isHoverPowerpoint && "pwp-div-1"}`}></div>
                    <div className={`${isHoverSellmate && "sellMate-div-2"} ${isHoverPortfolio && "portfolio-div-2"}`}></div>
                    <div className={`${isHoverSellmate && "sellMate-div-3"} ${isHoverPortfolio && "portfolio-div-3"}`}></div>
                    <div></div>
                </section>
            }
        </div>
    )
}

export default Projets;