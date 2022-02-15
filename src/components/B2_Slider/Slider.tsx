import React, {useEffect, useState} from "react";
import style from "./slider.module.scss"
import slide0 from "../../assets/gif/slide0.gif";
import slide1 from "../../assets/gif/slide1.gif";
import slide2 from "../../assets/gif/slide2.gif";
import slide3 from "../../assets/gif/slide3.gif";
import slide4 from "../../assets/gif/slide4.gif";
import slide5 from "../../assets/gif/slide5.gif";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperClass from 'swiper/types/swiper-class';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {Navigation} from 'swiper';
import IconButton from "@mui/material/IconButton";


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import slide6 from "../../assets/gif/slide6.gif";
import clsx from "clsx";

const slides = [
    slide0,
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
];
SwiperCore.use([Navigation]);
export const Slider = () => {
    const [swiperTop, setSwiperTop] = useState<SwiperClass | null>(null);
    const [swiperBottom, setSwiperBottom] = useState<SwiperClass | null>(null);

    return (
        <section className={style.slider}>
            {/*<div className={style.buttons}>*/}
            {/*    <IconButton disableRipple={true}*/}
            {/*                disableTouchRipple={true}*/}
            {/*                disableFocusRipple={true}*/}
            {/*                onClick={() => {*/}
            {/*                    swiperTop?.slidePrev();*/}
            {/*                    swiperBottom?.slidePrev();*/}
            {/*                }}*/}
            {/*                style={{marginRight: "32px"}}*/}
            {/*    >*/}
            {/*        <ArrowBackIosIcon fontSize='large'/>*/}
            {/*    </IconButton>*/}
            {/*    <IconButton disableRipple={true}*/}
            {/*                disableTouchRipple={true}*/}
            {/*                disableFocusRipple={true}*/}
            {/*                onClick={() => {*/}
            {/*                    swiperTop?.slideNext();*/}
            {/*                    swiperBottom?.slideNext();*/}
            {/*                }}*/}
            {/*    >*/}
            {/*        <ArrowForwardIosIcon fontSize='large'/>*/}
            {/*    </IconButton>*/}
            {/*</div>*/}

            <Swiper className={clsx(style.swiper, style.swiper_top)}
                    slidesPerView="auto"
                    slidesPerGroup={1}
                    dir="rtl"
                    loop={true}
                    onSwiper={setSwiperTop}
                    breakpoints={{
                        0: {
                            spaceBetween: 16,
                        },
                        1440: {
                            spaceBetween: 32,
                        },
                    }}
            >
                {
                    slides.map((slide, index) => (
                        <SwiperSlide key={index} className={style.slide}>
                            <img src={slide} alt=""/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Swiper className={clsx(style.swiper, style.swiper_bottom)}
                    slidesPerView="auto"
                    slidesPerGroup={1}
                    loop={true}
                    onSwiper={setSwiperBottom}
                    breakpoints={{
                        0: {
                            spaceBetween: 16,
                        },
                        1440: {
                            spaceBetween: 32,
                        },
                    }}

            >
                {
                    slides.map((slide, index) => (
                        <SwiperSlide key={index} className={style.slide}>
                            <img src={slide} alt=""/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/*<div className={style.buttons}>*/}
            {/*    <IconButton disableRipple={true}*/}
            {/*                disableTouchRipple={true}*/}
            {/*                disableFocusRipple={true}*/}
            {/*                onClick={() => {*/}
            {/*                    swiperBottom?.slidePrev();*/}
            {/*                    swiperTop?.slidePrev();*/}
            {/*                }}*/}
            {/*                style={{marginRight: "32px"}}*/}
            {/*    >*/}
            {/*        <ArrowBackIosIcon fontSize='large'/>*/}
            {/*    </IconButton>*/}
            {/*    <IconButton disableRipple={true}*/}
            {/*                disableTouchRipple={true}*/}
            {/*                disableFocusRipple={true}*/}
            {/*                onClick={() => {*/}
            {/*                    swiperBottom?.slideNext();*/}
            {/*                    swiperTop?.slideNext();*/}
            {/*                }}*/}
            {/*    >*/}
            {/*        <ArrowForwardIosIcon fontSize='large'/>*/}
            {/*    </IconButton>*/}
            {/*</div>*/}
        </section>
    )
}