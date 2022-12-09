import React, {useState} from "react";
import style from "./catalog1.module.css"
import {NavLink, Routes,Route, useLocation, useParams} from "react-router-dom";
import Items from "../ItemsTest/items";
import usePageData from "../../HOk/usePageData";
import {connect} from "react-redux";
import {setAllDataCatalog, setCatalogItems, setItemsPerPage, setTEst, sortItem} from "../../Redux/catalog-reducer";
import {compose} from "redux";
import {withRouter} from "../../HOk/withRouter";
import ItemPage from "../itemPage/itemPage";

const CatalogPage = ({setAllDataCatalog, productsCategory,allData,sortItem,mainCategory, router,setItemsPerPage})=>{
    const products = router.params.products
    const id = router.params.subcategory
    const subCategory = id && productsCategory.filter(item => item.path === id).map(item => item.category)

    usePageData(products, setAllDataCatalog)
    console.log(productsCategory)
    return(
        <div className={style.mainPageCatalog}>
            <div className={style.pagePath}>
                <NavLink className={style.path} to={'/women-shop'}>Главная</NavLink>
                <NavLink className={style.path} to={"/women-shop/catalog/" + products}>/{mainCategory}</NavLink>
                {subCategory ? <span>/{subCategory}</span> : <span></span>}
            </div>
            <h2>{mainCategory}</h2>
            <div className={style.sortBtn}>
                <p>Сортировать по:</p>
                <span onClick={()=>sortItem(allData,productsCategory, "SORT_BY_RATING")} >Рейтингу</span>
                <span onClick={()=>sortItem(allData,productsCategory, "SORT_BY_PRICE")}>Цене</span>
            </div>
            <div className={style.catalogBody}>

                <nav className={style.navigate}>
                    {productsCategory ? productsCategory.map((item, index) => {
                            return <NavLink key={index} className={style.linkNav} to={`/women-shop/catalog/${products}/${item.path}`}>{item.category}</NavLink>
                        })
                        : <p>загрузка</p>}
                </nav>
                <div className={style.catalogItems}>
                    <div className={style.items}>
                        <Items products={products}/>
                    </div>
                </div>
            </div>


        </div>
    )
}
let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        mainCategory: state.catalogItems.women.category,
    }
}
export default compose(connect(mapStateToProps, {setAllDataCatalog, setTEst,setItemsPerPage,sortItem}),withRouter)(CatalogPage)