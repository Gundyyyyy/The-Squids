import {ICard} from "./Team";
import React, {FC} from "react";
import style from "./card.module.scss";
import {ButtonLink} from "../common/ButtonLink/ButtomLink";
import imgD from "../../assets/png/buttons/In.png";
import imgH from "../../assets/png/buttons/Frame 481575.png";
import imgC from "../../assets/png/buttons/Frame 481577.png";

export const Card: FC<ICard> = ({
                                    img,
                                    name,
                                    job,
                                    text,
                                    href
                                }) => {
    return (
        <div className={style.card}>

            <div className={style.person}/>
            <p className={style.name}>{name}</p>
            <p className={style.job}>{job}</p>
            <p className={style.text}>{text}</p>
            <ButtonLink imgDefault={imgD}
                        imgHover={imgH}
                        imgClick={imgC}
                        href={href}
                        className={style.link}
            />
        </div>
    )
}