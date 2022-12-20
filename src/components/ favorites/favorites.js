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
import styleForBasket from '../Header/header.module.css'
import {useState} from "react";
import Basket from "../Basket/basket";
import {Route, Routes, NavLink} from "react-router-dom";
import reducerLog from "../../Redux/login-reducer";
import LogIn from "../LogIn/login";



const Favorites = ({currentData,favorites,basket,isAuth})=>{
    const [isBasketModal, setIsBasketModal] = useState(false)
    const handleBasketModal = ()=>{
        setIsBasketModal(!isBasketModal)
    }
    const [isLogin, setIsLogin] = useState(false)
    const handleLogInModal = ()=>{
        setIsLogin(!isLogin)
    }

    return(
        <div className={style.favoritesSection}>
            <div className={style.headerFavorites}>
                <h2>Избранное</h2>
            </div>
            <div className={style.bodyFavor}>
                <nav className={style.navigateFavor}>
                    <div onClick={()=>handleBasketModal()} className={`${style.liItem} ${style.basketLi}`}><img src={basketLogo} alt=""/>
                        <p className={style.titleBasket}>Корзина {basket.length > 0 ?
                            <span className={`${style.countBasket}`}>{basket.length}</span>
                            : <span></span>}</p></div>
                    <NavLink to={''} className={`${style.liItem} ${style.underLine}`}><img src={favoritesLogo} alt=""/><p>Избранное</p></NavLink>
                    <NavLink to={'bonus/'} className={`${style.liItem}`}><img src={bonusLogo} alt=""/><p>Бонусы</p></NavLink>
                    <NavLink to={'userData/'} className={style.liItem}><img src={logoUser} alt=""/><p>Личые данные</p></NavLink>
                    <NavLink to={'history/'} className={`${style.liItem} ${style.underLine}`}><img src={userData} alt=""/><p>Итория покупок</p></NavLink>
                    <NavLink to={'/women-shop/'} className={style.liItem}><img src={outLogo} alt=""/><p>Выйти</p></NavLink>

                </nav>
                <Routes >
                    <Route path={''} element={<div className={style.favorItems}>
                        {favorites.length > 0 ? favorites.map((item, index)=> { return <ItemCard id={item.id}   key={index} {...item}/>}) : <p className={style.haveDontItems}>Вы еще не добавили товары в избранное</p>}
                    </div>}/>
                    <Route path={'bonus/'} element={isAuth ? <div className={style.windInfo}>
                        <p className={style.haveDontItems}>Сделайте одну покупку и получите первый бонус!</p>
                        <NavLink to={"/women-shop/catalog/women/"}>Перейти в каталог</NavLink>
                    </div > : <LogIn onClose={handleLogInModal}/>}/>
                    <Route path={'userData/'} element={isAuth ? <div className={style.windInfo}><p className={style.haveDontItems}>Еще не доступно</p></div> : <LogIn onClose={handleLogInModal}/>}/>
                    <Route path={'history/'} element={isAuth ?  <div className={style.windInfo}>
                        <p className={style.haveDontItems}>Вы еще ничего не приобрели</p>
                        <NavLink to={"/women-shop/catalog/women/"}>Перейти в каталог</NavLink>
                    </div> : <LogIn onClose={handleLogInModal}/>}/>

                </Routes>

            </div>
            {isBasketModal && <Basket onClose={handleBasketModal}/>}
        </div>
    )
}
let mapStateToProps = (state)=>{
    return{
        stock: state.catalogItems.stock,
        itemsPerPage: state.catalogItems.itemsPerPage,
        currentData: state.catalogItems.currentData,
        favorites: state.catalogItems.favorites,
        basket:state.initBasket.basket,
        isAuth: state.reducerLog.isAuth
    }
}
export default compose(connect(mapStateToProps, {setAllDataCatalog,setItemsPerPage})) (Favorites)