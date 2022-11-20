import React from "react";
import item from "../../assets/items/Rectangle 24.png"
import style from  './item.module.css'
import styleHeader from "../Header/header.module.css"
import basketLogo from  '../../assets/header/basket.png';
import favritesLogo from  '../../assets/header/favorites.png'





const Item = ()=>{
    return(
            <div className={style.item}>
                <img className={style.imgItem} src={item} alt=""/>
                <div className={style.itemPrice}>
                    <span className={style.newPrice}>500грн</span>
                    <span className={style.oldPrice}>600 грн</span>
                </div>
                <div className={style.itemBody}>
                    <p className={style.description}>Очень красивая что-то</p>
                    <button className={styleHeader.basketBtn}><img src={favritesLogo} alt=""/></button>
                    <button className={styleHeader.basketBtn}><img src={basketLogo} alt=""/></button>
                </div>
                <div className={style.itemFooter}>
                    <button className={style.btnMore}>Подробнее
                        <div className={style.arrowBtn}>
                            <div className={style.line}></div>
                            <div className={style.triangleRight}></div>
                        </div>
                    </button>
                    <span className={style.grade}></span>
                </div>
            </div>
    )
}
export default Item