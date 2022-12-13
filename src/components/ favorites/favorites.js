import React from "react";
import style from "./favorites.module.css"
import Items from "../ItemsTest/items";
import {compose} from "redux";
import {connect} from "react-redux";
import {setAllDataCatalog, setItemsPerPage} from "../../Redux/catalog-reducer";
import {withRouter} from "../../HOk/withRouter";
import ItemCard from "../ItemsTest/itemCard";
import basketLogo from "../../assets/basket/basketMain.png"
import favoritesLogo from "../../assets/header/favoritesBig.png"



const Favorites = ({currentData})=>{
    return(
        <div className={style.favoritesSection}>
            <div className={style.headerFavorites}>
                <h2>Избранное</h2>
            </div>
            <div className={style.bodyFavor}>
                <nav className={style.navigateFavor}>
                    <div><img src={basketLogo} alt=""/>Корзина</div>
                    <div><img src={favoritesLogo} alt=""/>Избранное</div>
                    <div><img src="" alt=""/>Бонусы</div>
                    <div><img src="" alt=""/>Личые данные</div>
                    <div><img src="" alt=""/>Итория покупок</div>
                    <div><img src="" alt=""/>Выйти</div>

                </nav>
                <div className={style.favorItems}>
                    {currentData ? currentData.map((item, index)=> { return <ItemCard id={item.id}   key={index} {...item}/>}) : <div>pfuheprf</div>}
                </div>
            </div>
        </div>
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
export default compose(connect(mapStateToProps, {setAllDataCatalog,setItemsPerPage})) (Favorites)