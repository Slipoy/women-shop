import React, {useEffect, useState} from "react";
// import itemLogo from "../../assets/items/Rectangle 24.png"
import style from './items.module.css'
import styleHeader from "../Header/header.module.css"
import basketLogo from  '../../assets/header/basket.png';
import favritesLogo from  '../../assets/header/favorites.png'
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {setAllDataCatalog, setItemsPerPage} from "../../Redux/catalog-reducer";
import {compose} from "redux";
import {withRouter} from "../../HOk/withRouter";
import ItemCard from "./itemCard";





const Items = ({products,itemsPerPage,setItemsPerPage,currentData,filterData})=>{
    let showItems
    if (filterData.length === 0 || !filterData){
        showItems = currentData
    }else showItems = filterData
    // const subcategory = router.params.subcategory
    const [currentPage, setCurrentPage] = useState(1)
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    let currentItems = showItems.slice(firstItemIndex, lastItemIndex)

    return(
        <>
            {currentItems ? currentItems.map((item, index)=> { return <ItemCard id={item.id} products={products}  key={index} {...item}/>}) : <div>pfuheprf</div>}
            {showItems.length > lastItemIndex && <button onClick={setItemsPerPage} className={style.btnMorePage}>Еще</button> }
            </>
    )
}
let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        stock: state.catalogItems.stock,
        itemsPerPage: state.catalogItems.itemsPerPage,
        currentData: state.catalogItems.currentData
    }
}
export default compose(connect(mapStateToProps, {setAllDataCatalog,setItemsPerPage}),withRouter) (Items)