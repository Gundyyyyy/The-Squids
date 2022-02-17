import React, {FC,useState} from "react";
import style from "./home.module.scss"
import background from "../../assets/gif/home-back.gif";
import {SocialIcon} from "../common/SocialIcon/SocialIcon";
import enterD from "../../assets/png/buttons/button main.png";
import enterH from "../../assets/png/buttons/button main (1).png";
import enterC from "../../assets/png/buttons/button main (2).png";
import {ButtonLink} from "../common/ButtonLink/ButtomLink";
// @ts-ignore
import GlitchText from 'react-glitch-effect/core/GlitchText';

interface IHome {
    onClickHandler: () => void
}

export const Home: FC<IHome> = ({onClickHandler}) => {
    const [isDisabled, setDisabled] = useState(true);

    return (
        <section className={style.home}
                 // style={{backgroundImage: `url(${background})`}}
        >
            <div className={style.innerWrapper}>
                <GlitchText disabled={isDisabled}>
                <h1 className={style.title}
                    onMouseLeave={()=>setDisabled(true)}
                    onMouseOver={()=>setDisabled(false)}>Only a game away of living debt free</h1>
                </GlitchText>
                

                <ButtonLink imgDefault={enterD}
                            imgHover={enterH}
                            imgClick={enterC}
                            className={style.enterButton}
                            //onClickHandler={onClickHandler}
                />

                <div className={style.icons}>
                    {
                        ["twitter", "discord", "metamask"].map(icon => <SocialIcon key={icon}
                                                                                   icon={icon}
                                                                                   className={style.icon}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}