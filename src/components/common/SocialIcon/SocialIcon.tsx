import React, {FC} from "react";
import style from "./socialIcon.module.scss";

import metamaskD from "../../../assets/svg/buttons/metamask-d.svg";
import metamaskH from "../../../assets/svg/buttons/metamask-h.svg";
import metamaskC from "../../../assets/svg/buttons/metamask-c.svg";

import twitterD from "../../../assets/svg/buttons/twitter-d.svg";
import twitterH from "../../../assets/svg/buttons/twitter-h.svg";
import twitterC from "../../../assets/svg/buttons/twitter-c.svg";

import openSeaD from "../../../assets/svg/buttons/openSea-d.svg";
import openSeaH from "../../../assets/svg/buttons/openSea-h.svg";
import openSeaC from "../../../assets/svg/buttons/openSea-c.svg";

import discordD from "../../../assets/svg/buttons/discord-d.svg";
import discordH from "../../../assets/svg/buttons/discord-h.svg";
import discordC from "../../../assets/svg/buttons/discord-c.svg";


import {ButtonLink} from "../ButtonLink/ButtomLink";
import clsx from "clsx";


export interface ISocialIcon {
    icon: string
    className?: string
    onClick?: () => void
}

export interface IIcons {
    [key: string]: {
        default: string
        hover: string
        click: string
        href: string
    }
}

export const icons: IIcons = {
    "metamask": {
        default: metamaskD,
        hover: metamaskH,
        click: metamaskC,
        href: "#",
    },
    "twitter": {
        default: twitterD,
        hover: twitterH,
        click: twitterC,
        href: "#",
    },
    "openSea": {
        default: openSeaD,
        hover: openSeaH,
        click: openSeaC,
        href: "#",
    },
    "discord": {
        default: discordD,
        hover: discordH,
        click: discordC,
        href: "#",
    },
}

export const SocialIcon: FC<ISocialIcon> = ({icon, className, onClick}) => {
    return (
        <ButtonLink imgDefault={icons[icon].default}
                    imgHover={icons[icon].hover}
                    imgClick={icons[icon].click}
                    href={icons[icon].href}
                    className={clsx(style.socialIcon, className)}
                    onClickHandler={onClick}
        />
    )
}