import React, {useEffect, useState} from "react";
import style from "./items.module.css";
import itemLogo from "../../assets/items/Rectangle 24.png";
import styleHeader from "../Header/header.module.css";
import favritesLogo from "../../assets/header/favorites.png";
import basketLogo from "../../assets/header/basket.png";
import {compose} from "redux";
import {connect} from "react-redux";
import {setAllDataCatalog} from "../../Redux/catalog-reducer";
import {withRouter} from "../../HOk/withRouter";





const ItemCard = ({price, description, image})=>{
    let test = "items/Rectangle 24.png"
    // const src = require(`../../assets/${test}`)

    console.log( test)


    return(
        <div className={style.item}>
            <img className={style.imgItem} src={itemLogo} alt=""/>
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