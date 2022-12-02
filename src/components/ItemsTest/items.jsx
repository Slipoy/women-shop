import React, {useEffect, useState} from "react";
// import itemLogo from "../../assets/items/Rectangle 24.png"
import style from './items.module.css'
import styleHeader from "../Header/header.module.css"
import basketLogo from  '../../assets/header/basket.png';
import favritesLogo from  '../../assets/header/favorites.png'
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {setAllDataCatalog} from "../../Redux/catalog-reducer";
import {compose} from "redux";
import {withRouter} from "../../HOk/withRouter";
import ItemCard from "./itemCard";





const Items = ({productsCategory,allData,path,stock,router,products})=>{

    const id = router.params.subcategory
    let currentData
    console.log(products)
    if (!products){
        currentData = stock.data
    }
    if ( products && !id ){
        currentData = allData
    }
    else if(id){
        currentData = productsCategory.filter(item => item.path === id).map(item => item.data).flat()
    }
    return(
        <>
            {currentData ? currentData.map((item, index)=> { return <ItemCard key={index} {...item}/>}) : <div>pfuheprf</div>}
            </>
    )
}
let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        stock: state.catalogItems.stock
    }
}
export default compose(connect(mapStateToProps, {setAllDataCatalog}),withRouter) (Items)