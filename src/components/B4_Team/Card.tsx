import {ICard} from "./Team";
import React, {FC} from "react";
import style from "./card.module.scss";
import {ButtonLink} from "../common/ButtonLink/ButtomLink";
import imgD from "../../assets/svg/buttons/linkedIn-d.svg";
import imgH from "../../assets/svg/buttons/linkedIn-h.svg";
import imgC from "../../assets/svg/buttons/linkedIn-c.svg";

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