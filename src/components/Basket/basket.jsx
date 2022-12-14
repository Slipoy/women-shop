import React from "react";
import style from "./basket.module.css"
import basketLogo from "../../assets/basket/basketMain.png"
import testImg from "../../assets/items/Rectangle 23.png"
import heard from "../../assets/header/favorites.png"
import deleteImg from "../../assets/basket/delete.png"
import arrow from "../../assets/basket/Arrow 11.svg"
import styleItemPage from '../itemPage/itemPage.module.css'
import {compose} from "redux";
import {connect} from "react-redux";
import {setAllDataCatalog} from "../../Redux/catalog-reducer";
import {withRouter} from "../../HOk/withRouter";
import Portal from "../portal/portal";
import Header from "../Header/Header";
import btnArrowBack from "../../assets/basket/Arrow 10.svg"
import {changeCounter, deleteToBasket} from "../../Redux/basket";



const Basket =({basket,onClose,changeCounter,deleteToBasket})=>{
    const totalPrice = basket?.reduce((prev, acc) => prev + acc.price * acc.count, 0);
    return(
        <Portal>
            <div className={style.modalBasket}>

                <div className={style.wrapperBasket}>
                    <div className={style.sectionBasket}>
                        <div className={style.basketHeader}>
                            <button onClick={()=>onClose()} className={style.BtnBack}><img src={btnArrowBack} alt=""/></button>
                            <h2>Корзина</h2>
                            <img src={basketLogo} alt=""/>
                        </div>
                        <div className={style.basketBody}>
                            {
                                basket.length > 0 ? basket.map(item => {return <div key={item.id} className={style.basketItems}>
                                    <div className={style.itemImg}>
                                        <img src={testImg} alt=""/>
                                    </div>
                                    <div className={style.aboutItem}>
                                        <p className={style.nameItem}>{item.name} <span>{item.id}</span></p>
                                        <div className={style.sizeItem}>
                                            <span className={style.colorItem}>Цвет: синий</span>
                                            <span>Размер: 34</span>
                                        </div>
                                        <div className={style.counter}>
                                            <span onClick={()=>changeCounter(item.id, -1, item.count)} className={style.countItem}>-</span>
                                            <span className={style.countItem}>{item.count}</span>
                                            <span onClick={()=>changeCounter(item.id, 1, item.count)} className={style.countItem}>+</span>
                                        </div>

                                        <div className={style.actionBtn}>
                                            <span><img src={heard} alt=""/> В избранное</span>
                                            <span onClick={()=>deleteToBasket(item.id)} ><img src={deleteImg} alt=""/> удалить</span>
                                        </div>
                                    </div>
                                    <div className={style.priceItem}>
                                        <p>Стоимость</p>
                                        <span className={style.price}>{item.price * item.count}грн</span>
                                        <a href="!#">Информация о доставке <img src={arrow} alt=""/></a>
                                    </div>

                                </div>}): <div>нет товаров</div>
                            }
                        </div>


                        <div className={style.basketFooter}>
                            <div className={style.totalInfo}>
                                <p>Итого: <span className={style.totalPrice}>{totalPrice} грн</span></p>
                                <span className={style.totalCount}>Товары, {basket.length} штуки</span>
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
                </div>

            </div>


        </Portal>

    )
}
let mapStateToProps = (state)=>{
    return{
        basket:state.initBasket.basket
    }
}
export default compose(connect(mapStateToProps, {setAllDataCatalog,changeCounter,deleteToBasket}),withRouter) (Basket)