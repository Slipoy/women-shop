import React, {useEffect, useState} from "react";
// import itemLogo from "../../assets/items/Rectangle 24.png"
import style from './items.module.css'
import styleHeader from "../Header/header.module.css"
import basketLogo from  '../../assets/header/basket.png';
import favritesLogo from  '../../assets/header/favorites.png'
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {setAllDataCatalog,setItemsPerPage} from "../../Redux/catalog-reducer";
import {compose} from "redux";
import {withRouter} from "../../HOk/withRouter";
import ItemCard from "./itemCard";
// import Paggination from "./paggination/paggination";





const Items = ({productsCategory,allData,path,stock,router,products,itemsPerPage,setItemsPerPage})=>{
    const subcategory = router.params.subcategory
    let currentData
    if (!products){
        currentData = stock.data
    }
    if ( products && !subcategory ){
        currentData = allData
    }
    else if(subcategory){
        currentData = productsCategory.filter(item => item.path === subcategory).map(item => item.data).flat()
    }
    const [currentPage, setCurrentPage] = useState(1)
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const currentItem = currentData.slice(firstItemIndex, lastItemIndex)
    const sortByRating = ()=> currentItem.sort((a,b)=> {return b.stars - a.stars})
    console.log(currentData)




    return(
        <>
            {currentItem ? currentItem.map((item, index)=> { return <ItemCard id={item.id} products={products} subcategory={subcategory} key={index} {...item}/>}) : <div>pfuheprf</div>}
            {currentData.length > 6 && <button onClick={setItemsPerPage} className={style.btnMorePage}>Еще</button> }
            </>
    )
}
let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        stock: state.catalogItems.stock,
        itemsPerPage: state.catalogItems.itemsPerPage
    }
}
export default compose(connect(mapStateToProps, {setAllDataCatalog,setItemsPerPage}),withRouter) (Items)