import React, {useEffect, useState} from "react";
import style from "./items.module.css";
import itemLogo from "../../assets/items/Rectangle 23.png";
import styleHeader from "../Header/header.module.css";
import favritesLogo from "../../assets/header/favorites.png";
import basketLogo from "../../assets/header/basket.png";
import {compose} from "redux";
import {connect} from "react-redux";
import {setAllDataCatalog} from "../../Redux/catalog-reducer";
import {withRouter} from "../../HOk/withRouter";

import img1 from "../../assets/items/Rectangle 23.png";
import img2 from "../../assets/items/Rectangle 24.png";
import img3 from "../../assets/items/Rectangle 25.png";
import img4 from "../../assets/items/Rectangle 26.png";
import img5 from "../../assets/items/Rectangle 27.png";
import img6 from "../../assets/items/Rectangle 28.png";





const ItemCard = ({price,description, image})=>{


    const photo = [img1, img2,img3,img4,img5,img6]
    const src = require(`./${image}`)

    return(
        <div className={style.item}>
            <img className={style.imgItem} src={src} alt=""/>
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

let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        stock: state.catalogItems.stock
    }
}
export default compose(connect(mapStateToProps, {setAllDataCatalog}),withRouter) (ItemCard)