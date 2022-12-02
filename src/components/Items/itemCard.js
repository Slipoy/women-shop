import React from "react";
import style from "./items.module.css";
import itemLogo from "../../assets/items/Rectangle 24.png";
import styleHeader from "../Header/header.module.css";
import favritesLogo from "../../assets/header/favorites.png";
import basketLogo from "../../assets/header/basket.png";




const ItemCard = ({price, description, image})=>{
    const pathID = `../../assets/${image}`
    console.log(pathID)
    const src = require(`${pathID}`)


    return(
        <div className={style.item}>
            <img className={style.imgItem} src={`${src}`} alt=""/>
            <div className={style.itemPrice}>
                <span className={style.newPrice}>{price}грн</span>
                <span className={style.oldPrice}>600 грн</span>
            </div>
            <div className={style.itemBody}>
                <p className={style.description}>{description}</p>
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

export default ItemCard