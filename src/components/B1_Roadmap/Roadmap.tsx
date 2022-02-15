import React from "react";
import style from "./roadmap.module.scss";
import "./animation.scss"
import icon0_1 from "../../assets/png/roadmap-icon-0-1.png";
import icon1_1 from "../../assets/png/roadmap-icon-1-1.png";
import icon2_1 from "../../assets/png/roadmap-icon-2-1.png";
import icon3_1 from "../../assets/png/roadmap-icon-3-1.png";
import icon0_2 from "../../assets/png/roadmap-icon-0-2.png";
import icon1_2 from "../../assets/png/roadmap-icon-1-2.png";
import icon2_2 from "../../assets/png/roadmap-icon-2-2.png";
import icon3_2 from "../../assets/png/roadmap-icon-3-2.png";
import clsx from "clsx";


export const cards = [
    {
        icon1: icon0_1,
        icon2: icon0_2,
        step: "Stage 1 - 25%",
        title: "The Lab’s creation",
        text: "After a fine development at a molecular level, each squids will be available for mint, eager to play some games."
    },
    {
        icon1: icon1_1,
        icon2: icon1_2,
        step: "Stage 1 - 50%",
        title: "Let the fun begins",
        text: "Each enhanced humans have finally found a place to train. The games are ready to be played and the Genesis Squids are here to supervise them"
    },
    {
        icon1: icon2_1,
        icon2: icon2_2,
        step: "Stage 1 - 75%",
        title: "Winner Winner Chicken Dinner",
        text: "The winner of the first tournament has been designated, the new in-game token launched. We are now set to make more games, rules and  prizes."
    },
    {
        icon1: icon3_1,
        icon2: icon3_2,
        step: "Stage 1 - 100%",
        title: "Total domination",
        text: "The Squids have proven to be extremely strong in their own environment. Will they prevail in the metaverse ? Only one way to find out."
    },
]


export const Roadmap = () => {
    return (
        <section className={style.roadmap}
                 id="RoadMap"
        >
            <h2 className={style.title}>The Squids Roadmap</h2>
            <div className={style.cards} >
                {
                    cards.map((card, index) => (
                        <div key={index}
                             className={clsx(style.card, "cardAnim")}
                             //style={{backgroundImage: `url(${cardBack})`}}
                        >
                            <div className={style.iconWrapper}>
                                <img src={card.icon2} alt="" />
                                <img src={card.icon1} alt="" className="iconAnim"/>
                            </div>

                            <p className={style.step}>{card.step}</p>
                            <p className={style.title}>{card.title}</p>
                            <p className={style.text}>{card.text}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}