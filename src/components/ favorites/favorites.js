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
import userData from "../../assets/favorites/userData.png"
import bonusLogo from '../../assets/favorites/bonus2.png'
import logoUser from "../../assets/header/user2.png"
import outLogo from '../../assets/favorites/out.png'



const Favorites = ({currentData,favorites})=>{
    console.log(favorites)

    return(
        <div className={style.favoritesSection}>
            <div className={style.headerFavorites}>
                <h2>Избранное</h2>
            </div>
            <div className={style.bodyFavor}>
                <nav className={style.navigateFavor}>
                    <div className={`${style.liItem}`}><img src={basketLogo} alt=""/><p>Корзина</p></div>
                    <div className={`${style.liItem} ${style.underLine}`}><img src={favoritesLogo} alt=""/><p>Избранное</p></div>
                    <div className={`${style.liItem}`}><img src={bonusLogo} alt=""/><p>Бонусы</p></div>
                    <div className={style.liItem}><img src={logoUser} alt=""/><p>Личые данные</p></div>
                    <div className={`${style.liItem} ${style.underLine}`}><img src={userData} alt=""/><p>Итория покупок</p></div>
                    <div className={style.liItem}><img src={outLogo} alt=""/><p>Выйти</p></div>

                </nav>
                <div className={style.favorItems}>
                    {favorites ? favorites.map((item, index)=> { return <ItemCard id={item.id}   key={index} {...item}/>}) : <div>pfuheprf</div>}
                </div>
            </div>
        </div>
    )
}
let mapStateToProps = (state)=>{
    return{
        stock: state.catalogItems.stock,
        itemsPerPage: state.catalogItems.itemsPerPage,
        currentData: state.catalogItems.currentData,
        favorites: state.catalogItems.favorites
    }
}
export default compose(connect(mapStateToProps, {setAllDataCatalog,setItemsPerPage})) (Favorites)