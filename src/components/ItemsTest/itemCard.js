import React, {useEffect, useState} from "react";
import style from "./items.module.css";
import styleHeader from "../Header/header.module.css";
import favritesLogo from "../../assets/header/favorites.png";
import heartFill from   '../../assets/header/fillHeart.jpeg'
import basketLogo from "../../assets/header/basket.png";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    setAllDataCatalog,
    updateBasketStatus,
    addToFavorites,
    updateFavoritesStatus, deleteToFavorites
} from "../../Redux/catalog-reducer";

import {withRouter} from "../../HOk/withRouter";
import star from    '../../assets/star/Vector (1).png'
import {NavLink} from "react-router-dom";
import {addToBasket, deleteToBasket} from "../../Redux/basket";
import basketTrue from "../../assets/basket/basketTrue.png"





const ItemCard = ({price,description, image, stars,name,isFavorites, isBasket,addToBasket,
                      id,oldPrice,addToFavorites, updateBasketStatus,deleteToBasket,updateFavoritesStatus,deleteToFavorites})=>{
    const src = require(`./${image}`)
    const initStars = (count)=>{
        let starsArray = []
        for (let i = 0; i < count; i++){
            starsArray.push(i)
        }
        return  starsArray
    }

    const addBasket = (id, price, name)=>{

        const data = {
            name: name,
            price: price,
            id: id,
            count: 1
        }
        addToBasket(data)
        updateBasketStatus(id)
    }
    const handleDeleteBasket = (id)=>{
        updateBasketStatus(id)
        deleteToBasket(id)
    }
    const addFavorites = (id)=>{
        addToFavorites(id)
        updateFavoritesStatus(id)
    }
    const handleDeleteFavorites = (id)=>{
        updateFavoritesStatus(id)
        deleteToFavorites(id)

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
                    {!isFavorites ? <button onClick={()=> addFavorites(id)} className={styleHeader.basketBtn}><img src={favritesLogo} alt=""/></button>:
                        <button onClick={()=> handleDeleteFavorites(id)} className={styleHeader.basketBtn}><img src={heartFill} alt=""/></button>}

                    {!isBasket ? <button onClick={()=> addBasket(id,price,name)} className={styleHeader.basketBtn}><img src={basketLogo} alt=""/></button> :
                        <button onClick={()=>handleDeleteBasket(id)} className={styleHeader.isBasketBtn}><img src={basketLogo} alt=""/></button>}

                </div>

            </div >
            <div className={style.itemFooter}>
                <NavLink to={`/women-shop/product/${id}`}>
                    <button className={style.btnMore}>Подробнее
                        <div className={style.arrowBtn}>
                            <div className={style.line}></div>
                            <div className={style.triangleRight}></div>
                        </div>
                    </button>
                </NavLink>

                <span className={style.grade}>{initStars(stars).map((item,index)=> <img key={index} src={star} alt=""/>)}</span>
            </div>

        </div>
    )
}

let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        stock: state.catalogItems.stock,
        basket:state.initBasket.basket,
        currentData: state.catalogItems.currentData
    }
}
export default compose(connect(mapStateToProps, {setAllDataCatalog,addToBasket,updateBasketStatus,deleteToBasket,addToFavorites,updateFavoritesStatus,deleteToFavorites}),withRouter) (ItemCard)