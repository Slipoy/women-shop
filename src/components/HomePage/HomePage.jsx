import React, {useEffect} from "react";
import Banner from "../baner/Baner";
import style from   './homePage.module.css'
import Item from "../Item/item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviews from "../Reviews/reviews";
import Questions from "../ Questions/questions";
import Cooperation from "../cooperation/cooperation";
import {connect} from "react-redux";
import usePageData from "../../HOk/usePageData";
import {setCatalogItems} from "../../Redux/catalog-reducer";

import firebase from "../../utils/fb-config";




const HomePage = ({items})=>{
    usePageData("stock");
    console.log(items)
    const settings = {
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4
    }
    return(
        <>
            <Banner/>
            <section className={style.regalia}>
                <h2 className={style.headerRegalia}>Почему выбирают нас?</h2>
                <div className={style.regaliaList}>
                    <p>Скидки постоянным клиентам от 5% <span className={style.circle}></span></p>
                    <p>Предлагаем самые выгодные цены</p>
                    <p>Наши покупатели всегда остаются довольны<span className={style.circle}></span></p>
                    <p>Ширикий ассортимент товаров для всей семьи</p>
                    <p>Возможность доставки в любой город Украины<span className={style.circle}></span> </p>
                    <p>Пункты выдачи заказов рядом с домом<span className={style.circle}></span></p>
                </div>
            </section>
            <section className={style.stock}>
                <h2 className={style.stockHeader}>Успей купить!</h2>
                <div className={style.stockItems}>
                    <Slider {...settings}>
                        {/*{items ? items.data.map(item=>{return <Item {...item}/>}): <h3>нет тооваров</h3> }*/}
                    </Slider>
                </div>

            </section>
            <Reviews/>
            <Questions/>
            <Cooperation/>

        </>


    )
}
let mapStateToProps = (state)=>{
    return{
        items: state.catalogItems.store.data
    }
}
export default connect(mapStateToProps, {setCatalogItems})(HomePage)