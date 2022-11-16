import React from "react";
import Banner from "../baner/Baner";
import style from   './homePage.module.css'
import Item from "../Item/item";




const HomePage = ()=>{
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
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>

            </section>
        </>


    )
}
export default HomePage