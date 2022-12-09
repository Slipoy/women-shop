import React, {useEffect, useState} from "react";
import style from "./items.module.css";

import styleHeader from "../Header/header.module.css";
import favritesLogo from "../../assets/header/favorites.png";
import basketLogo from "../../assets/header/basket.png";
import {compose} from "redux";
import {connect} from "react-redux";
import {setAllDataCatalog} from "../../Redux/catalog-reducer";
import {withRouter} from "../../HOk/withRouter";
import star from    '../../assets/star/Vector (1).png'
import {NavLink} from "react-router-dom";





const ItemCard = ({price,description, image, stars, subcategory,products, id,oldPrice})=>{
    const src = require(`./${image}`)
    const initStars = (count)=>{
        let starsArray = []
        for (let i = 0; i < count; i++){
            starsArray.push(i)
        }
        return  starsArray
    }

    return(
        <div className={style.item}>
            <div className={style.imgItem}>
                <img  src={src} alt=""/>
            </div>

            <div className={style.itemPrice}>
                <span className={style.newPrice}>{price}грн</span>
                {oldPrice && <span className={style.oldPrice}>{oldPrice}грн</span>}
            </div>
            <div className={style.itemBody}>
                <p className={style.description}>{description}</p>
                <div className={style.divBtn}>
                    <button className={styleHeader.basketBtn}><img src={favritesLogo} alt=""/></button>
                    <button className={styleHeader.basketBtn}><img src={basketLogo} alt=""/></button>
                </div>

            </div >
            <div className={style.itemFooter}>
                <a href={`/women-shop/product/${id}`}>
                    <button className={style.btnMore}>Подробнее
                        <div className={style.arrowBtn}>
                            <div className={style.line}></div>
                            <div className={style.triangleRight}></div>
                        </div>
                    </button>
                </a>

                <span className={style.grade}>{initStars(stars).map((item,index)=> <img key={index} src={star} alt=""/>)}</span>
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