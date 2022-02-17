import React from "react";
import style from "./team.module.scss";
import person from "../../assets/png/team-person.png";
import {Card} from "./Card";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';


export interface ICard {
    img: string
    name: string
    job: string
    text: string
    href: string
}

const cards: ICard[] = [
    {
        img: person,
        name: "Theo “Gundy” Escriva",
        job: "Project Lead",
        text: "French entrepreneur, and digital business owner, Theo has built and directed numerous projects after entering the crypto space in 2016",
        href: '#'
    },
    {
        img: person,
        name: "Zozimo Neto ",
        job: "Artist",
        text: "Brazilian artist and game designer for the last 16 years, Zózimo worked for some companies in Brazil, North America and Europe, including Gameloft. A lot of his inspiration comes from old school games",
        href: '#'
    },
    {
        img: person,
        name: "Jonas “Sennec” Friesslich",
        job: "Software engineer",
        text: "German software engineer working in the medical sector, Jonas is also a c++ university tutor and blockchain enthousiast",
        href: '#'
    },
    {
        img: person,
        name: "Dmitrij “Dimfred” Vinokour",
        job: "Blockchain Developer",
        text: "Software developer from Germany, Dimi has been working in various projects in the blockchain space since 3years. ",
        href: '#'
    },
    {
        img: person,
        name: "Anatoliy Demyanchuk",
        job: "UI/UX designer",
        text: "Ukrainian art director and designer since 2017, Anatoliy has been working exclusively for crypto projects like Jigen app and Garlicoin in the last 2 years",
        href: '#'
    },
    {
        img: person,
        name: "Moderators",
        job: "Community moderators",
        text: "They will be designed during the first phase of the project. Early enthusiasts who desire to help the project reach it’s full potential and help the community.",
        href: '#'
    },
];

export const Team = () => {
    return (
        <section className={style.team}

        >
            <h2 className={style.title} id="Team" >Meet our team</h2>

            <Swiper
                className={style.slider}
                spaceBetween={8}
                slidesPerView="auto"
                slidesPerGroup={1}
            >
                {
                    cards.map((card, index) => (
                        <SwiperSlide key={index} className={style.slide}>
                            <Card {...card}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className={style.cards}>
                {
                    cards.map((card, index) => <Card key={index} {...card}/>)
                }
            </div>


        </section>
    )
}