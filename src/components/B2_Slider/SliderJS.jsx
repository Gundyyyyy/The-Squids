import React, {useState} from "react";
import style from "./slider.module.scss"
import slide0 from "../../assets/gif/slide0.gif";
import slide1 from "../../assets/gif/slide1.gif";
import slide2 from "../../assets/gif/slide2.gif";
import slide3 from "../../assets/gif/slide3.gif";
import slide4 from "../../assets/gif/slide4.gif";
import slide5 from "../../assets/gif/slide5.gif";
import slide6 from "../../assets/gif/slide6.gif";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {Mousewheel, Controller} from 'swiper';
SwiperCore.use([Mousewheel, Controller]);

const slides = [
    slide0,
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
];

export const SliderJS = () => {
    const [topSwiper, setTopSwiper] = useState(null);
    const [bottomSwiper, setBottomSwiper] = useState(null);

    return (
        <section className={style.slider}>
            <Swiper className={style.sliderTop}
                    slidesPerView="auto"
                    slidesPerGroup={1}
                    mousewheel={true}
                    loop={true}
                    onSwiper={setTopSwiper}
                    modules={[Controller]}
                    controller={{control: bottomSwiper }}
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

            <Swiper className={style.sliderBottom}
                    slidesPerView="auto"
                    slidesPerGroup={1}
                    onSwiper={setBottomSwiper}
                    dir="rtl"
                    mousewheel={true}
                    modules={[Controller]}
                    controller={{ control: topSwiper }}
                    loop={true}
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
                    [...slides].map((slide, index) => (
                        <SwiperSlide key={index} className={style.slide}>
                            <img src={slide} alt=""/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}