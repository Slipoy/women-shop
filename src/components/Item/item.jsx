import React, {useEffect, useState} from "react";
import itemLogo from "../../assets/items/Rectangle 24.png"
import style from  './item.module.css'
import styleHeader from "../Header/header.module.css"
import basketLogo from  '../../assets/header/basket.png';
import favritesLogo from  '../../assets/header/favorites.png'
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {setAllDataCatalog} from "../../Redux/catalog-reducer";
import Catalog from "../Catalog/Catalog";





const Item = ({productsCategory,allData,path,stock})=>{
    const params = useParams()
    const id = params.testID
    let currentData
    if (!params.products){
        currentData = stock.data
    }
    if (!id && params.products){
        currentData = allData
    }
    else if(id){
        currentData = productsCategory.filter(item => item.path === id).map(item => item.data).flat()
    }
    return(
        <>
            {currentData ? currentData.map(item=> { return <div  className={style.item}>
                <img className={style.imgItem} src={itemLogo} alt=""/>
                <div className={style.itemPrice}>
                    <span className={style.newPrice}>{item.price}грн</span>
                    <span className={style.oldPrice}>600 грн</span>
                </div>
                <div className={style.itemBody}>
                    <p className={style.description}>{item.description}</p>
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
            </div>}) : <div>pfuheprf</div>}
        </>
    )
}
let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        products: state.catalogItems.products,
        stock: state.catalogItems.stock
    }
}
export default connect(mapStateToProps, {setAllDataCatalog})(Item)