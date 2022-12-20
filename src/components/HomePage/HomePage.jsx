import React, {useEffect} from "react";
import Banner from "../baner/Baner";
import style from   './homePage.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviews from "../Reviews/reviews";
import Questions from "../ Questions/questions";
import Cooperation from "../cooperation/cooperation";
import {connect} from "react-redux";
import {setAllDataCatalog, setCatalogItems} from "../../Redux/catalog-reducer";
import firebase from "../../utils/fb-config";
import Stock from "../Stock/stock";






const HomePage = ({stock,currentData,setAllDataCatalog})=>{
    useEffect(() => {
        if(!currentData)
        firebase
            .database()
            .ref()
            .child("women")
            .once('value')
            .then(data => setAllDataCatalog(data.val()))
    },["women"]);
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
            <Stock stock={stock}/>
            <Reviews/>
            <Questions/>
            <Cooperation/>
        </>


    )
}
let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        stock: state.catalogItems.stock,
        testAllData: state.catalogItems.allData,
        currentData: state.catalogItems.currentData,
    }
}
export default connect(mapStateToProps, {setCatalogItems,setAllDataCatalog})(HomePage)