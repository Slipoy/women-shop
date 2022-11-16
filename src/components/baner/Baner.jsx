import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./baner.module.css"
import img1 from '../../assets/baner/main1.png'
import img2 from '../../assets/baner/main2.png'
import img3 from '../../assets/baner/main3.png'
import helloLogo from "../../assets/baner/Rectangle 22 (1).png"

const Banner =()=>{
    const settings = {
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return(
        <div className={style.banner}>
            <div className={style.slider}>
                <div className={style.sliderPromo}>
                    <img src={helloLogo} alt=""/>
                    <Slider {...settings}>
                        <section className={style.firstBan}>
                            <h1 className="promo-title">Добро пожаловать в <span className={style.nameShop}>Coctaile</span></h1>
                            <p className="promo-text">
                                Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>

                        </section>

                        <section className={style.secondBan}>
                            <h1 className="promo-title">Новые поступления в этом сезоне</h1>
                            <p className="promo-text">
                                Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>

                        </section>

                        <section className={style.thirdBan}>
                            <h1 className="promo-title">Новые поступления в этом сезоне</h1>
                            <p className="promo-text">
                                Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>

                        </section>

                        <section className={style.fourthBan}>
                            <h1 className="promo-title">Успей ипльзовать свою сккидку!</h1>
                            <p className="promo-text">
                                Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>

                        </section>
                    </Slider>
                    <button className={style.catalogBtn}>
                        <span>Каталог</span>
                        <div className={style.arrow} >
                            <div className={style.line}></div>
                            <div className={style.triangleRight}></div>
                        </div>

                    </button>
                </div>

            </div>
            <div className={style.leftBan}>
                <img className={style.mainImg} src={img1} alt=""/>
                <img className={style.firstImg} src={img2} alt=""/>
                <img className={style.secondImg} src={img3} alt=""/>

            </div>


        </div>
    )

}

export default Banner