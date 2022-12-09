import React from "react";
import style from "./basket.module.css"
import basketLogo from "../../assets/basket/basketMain.png"
import testImg from "../../assets/items/Rectangle 23.png"
import heard from "../../assets/header/favorites.png"
import deleteImg from "../../assets/basket/delete.png"
import arrow from "../../assets/basket/Arrow 11.svg"
import styleItemPage from '../itemPage/itemPage.module.css'



const Basket =()=>{
    return(
        <div className={style.sectionBasket}>
            <div className={style.basketHeader}>
                <h2>Корзина</h2>
                <img src={basketLogo} alt=""/>
            </div>
            <div className={style.basketBody}>
                <div className={style.itemImg}>
                    <img src={testImg} alt=""/>
                </div>
                <div className={style.aboutItem}>
                    <p className={style.nameItem}>Женское платье <span>Art 1234</span></p>
                    <div className={style.sizeItem}>
                        <span className={style.colorItem}>Цвет: синий</span>
                        <span>Размер: 34</span>
                    </div>
                    <div className={style.counter}>
                        <span className={style.countItem}>-</span>
                        <span className={style.countItem}>1</span>
                        <span className={style.countItem}>+</span>
                    </div>

                    <div className={style.actionBtn}>
                        <span><img src={heard} alt=""/> В избранное</span>
                        <span><img src={deleteImg} alt=""/> удалить</span>
                    </div>
                </div>
                <div className={style.priceItem}>
                    <p>Стоимость</p>
                    <span className={style.price}>500 грн</span>
                    <a href="!#">Информация о доставке <img src={arrow} alt=""/></a>
                </div>

            </div>
            <div className={style.basketFooter}>
                <div className={style.totalInfo}>
                    <p>Итого: <span className={style.totalPrice}>900 грн</span></p>
                    <span className={style.totalCount}>Товары, 2 штуки</span>
                </div>
                <div className={style.order}>
                    <button className={style.orderBtn}>Заказать</button>
                    <form action="">
                        <input type="checkbox"/>
                        <label htmlFor="">Даю согласие на обработку персональных данных</label>
                    </form>
                </div>



            </div>
        </div>
    )
}
export default Basket