import React, {useState} from "react";
import style from "./catalog1.module.css"
import {NavLink, Routes,Route, useLocation, useParams} from "react-router-dom";
import Items from "../ItemsTest/items";
import usePageData from "../../HOk/usePageData";
import {connect} from "react-redux";
import {setAllDataCatalog, setCatalogItems, setItemsPerPage, sortItem} from "../../Redux/catalog-reducer";
import {compose} from "redux";
import {withRouter} from "../../HOk/withRouter";

import FilterList from "../FilterList/filterList";

const CatalogPage = ({setAllDataCatalog, productsCategory,allData,sortItem,mainCategory, router,currentData})=>{
    const products = router.params.products
    // const id = router.params.subcategory
    // const subCategory = id && productsCategory.filter(item => item.path === id).map(item => item.category)
    usePageData(products, setAllDataCatalog,currentData)
    const [filterData, setFilterData] = useState([])
    const filterAdd = (value, checked)=>{
        if (!checked){
            setFilterData([...filterData, ...currentData.filter(item=> item.path === value).map(item=>item)])
        }else setFilterData(filterData.filter(item=> item.path !== value))
    }
    return(
        <div className={style.mainPageCatalog}>
            <div className={style.pagePath}>
                <NavLink className={style.path} to={'/women-shop'}>Главная</NavLink>
                <NavLink className={style.path} to={"/women-shop/catalog/" + products}>/{mainCategory}</NavLink>
                {/*{subCategory ? <span>/{subCategory}</span> : <span></span>}*/}
            </div>
            <h2>{mainCategory}</h2>
            <div className={style.sortBtn}>
                <p>Сортировать по:</p>
                <span onClick={()=>sortItem(currentData, "SORT_BY_RATING")} >Рейтингу</span>
                <span onClick={()=>sortItem(currentData, "SORT_BY_PRICE")}>Цене</span>
            </div>
            <div className={style.catalogBody}>

                <form className={style.navigate}>
                    {productsCategory ? productsCategory.map((item, index) => {
                            return <FilterList  category={item.category} path={item.path} filterAdd={filterAdd}/>
                        })
                        : <p>загрузка</p>}
                </form>
                <div className={style.catalogItems}>
                    <div className={style.items}>
                        <Items products={products} filterData={filterData}/>
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
        currentData: state.catalogItems.currentData
    }
}
export default compose(connect(mapStateToProps, {setAllDataCatalog,setItemsPerPage,sortItem}),withRouter)(CatalogPage)