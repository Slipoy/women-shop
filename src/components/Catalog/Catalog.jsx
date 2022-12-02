import React, {useState} from "react";
import style from "./catalog1.module.css"
import {NavLink, useLocation, useParams} from "react-router-dom";
import Items from "../Items/items";
import usePageData from "../../HOk/usePageData";
import {connect} from "react-redux";
import {setAllDataCatalog, setCatalogItems, setTEst} from "../../Redux/catalog-reducer";
import {compose} from "redux";
import {withRouter} from "../../HOk/withRouter";

const CatalogPage = ({setAllDataCatalog, productsCategory,allData, setTEst,subcategory,mainCategory, router})=>{
    const products = router.params.products
    const id = router.params.subcategory
    const subCategory = id && productsCategory.filter(item => item.path === id).map(item => item.category)
    usePageData(products, setAllDataCatalog)
    return(

        <div className={style.mainPageCatalog}>
            <div className={style.pagePath}>
                <span>{`Главная/${mainCategory}`}</span>
                {subCategory ? <span>/{subCategory}</span> : <span></span>}
            </div>
            <h2>{mainCategory}</h2>
            <div className={style.sortBtn}>
                <p>Сортировать по:</p>
                <span>Популярности</span>
                <span>Рейтингу</span>
                <span>Цене</span>
                <span>Скидки</span>
                <span>Обновлению</span>
            </div>
            <div className={style.catalogBody}>

                <nav className={style.navigate}>
                    {productsCategory ? productsCategory.map((item, index) => {return <NavLink  key={index} className={style.linkNav} to={`/women-shop/${products}/${item.path}`}>{item.category}</NavLink>})
                        : <p>загрузка</p>}
                </nav>
                <div className={style.catalogItems}>
                    {/*<Routes>*/}
                    {/*    /!*<Route path="" element={<Items/>}/>*!/*/}
                    {/*    /!*{productsCategory.map((item, index) => {return <Route key={index} path=":subcategory/" element={<Items path={products}/>}/>})}*!/*/}
                    {/*   */}
                    {/*</Routes>*/}
                    <Items products={products}/>
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
export default compose(connect(mapStateToProps, {setAllDataCatalog, setTEst}),withRouter)(CatalogPage)