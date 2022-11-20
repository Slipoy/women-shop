import React from "react"
import style from "./Cooperation.module.css"
import benefits1 from "../../assets/benefits/1.png"
import benefits2 from "../../assets/benefits/2.png"
import benefits3 from "../../assets/benefits/3.png"
import benefits4 from "../../assets/benefits/4.png"


const Cooperation = ()=>{
    return(
        <section className={style.cooperation}>
            <h2 className={style.headerCooperation}>Сорудничество с нами!</h2>
            <p className={style.cooperationDescription}>Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем новые проекты, которые могут быть привлекательны и интересны с коммерческой точки зрения.
            </p>
            <div className={style.offers}>
                <div className={style.offerItem}>
                    <h3>Становитесь партнёром</h3>
                    <p>Регистрируйтесь и
                        переходите в свой кабинет</p>
                </div>
                <div className={style.offerItem}>
                    <h3>Рекламируйте
                        товары</h3>
                    <p>Рекламируйте наши товары
                        на форумах, сайтах, в социальных сетях</p>
                </div>
                <div className={style.offerItem}>
                    <h3>Приводите покупателей</h3>
                    <p>Приводите покупателей на
                        наш сайт по уникальной ссылке</p>
                </div>
                <div className={style.offerItem}>
                    <h3>Получайте
                        бонусы</h3>
                    <p>Копите бонусы от каждого оплаченного заказа</p>
                </div>
            </div>
                <h3 className={style.benefitsHeader}>Это выгодно. Какие преимущества?</h3>
                <div className={style.benefits}>
                    <div className={style.benefitsItem}>
                        <img src={benefits1} alt=""/>
                        <span>Автоматизация процессов</span>
                    </div>
                    <div className={style.benefitsItem}>
                        <img src={benefits2} alt=""/>
                        <span>Пополнение ассортимента</span>
                    </div>
                    <div className={style.benefitsItem}>
                        <img src={benefits3} alt=""/>
                        <span>Поддержка и обучение</span>
                    </div>
                    <div className={style.benefitsItem}>
                        <img src={benefits4} alt=""/>
                        <span>Бонусы за новых клиентов</span>
                    </div>
                </div>
        </section>
    )
}
export default Cooperation
