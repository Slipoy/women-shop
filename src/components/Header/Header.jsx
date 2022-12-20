import React, {useState} from "react";
import style from "./header.module.css"
import basketLogo from  '../../assets/header/basket.png';
import favritesLogo from  '../../assets/header/favorites.png'
import userLogo from '../../assets/header/icon.png'
import searchLogo from "../../assets/header/icon-searcр.png"
import heartFill from   '../../assets/header/heardFill.png'
import logo from '../../assets/header/logo.png'
import {connect} from "react-redux";
import {setCatalogItems, setCategoryName} from "../../Redux/catalog-reducer";
import CatalogMenuItem from "../catalogMenu/catalogMenuItem/catalogmenuItem";
import Basket from "../Basket/basket";
import {Navigate, NavLink} from "react-router-dom";
import favorites from "../ favorites/favorites";
import LogIn from "../LogIn/login";






const Header = ({basket,favorites})=>{
    const [isBasketModal, setIsBasketModal] = useState(false)
    const handleBasketModal = ()=>{
        setIsBasketModal(!isBasketModal)
    }
    const [isLogin, setIsLogin] = useState(false)
    const handleLogInModal = ()=>{
        setIsLogin(!isLogin)
    }
    const toFavor =()=>{
        return <Navigate to='women-shop/favorites'/>
    }

    return (
        <header>
            <div name={"header"} className={style.header}>

                <div className={style.mainMenu}>
                    <button className={style.mainMenuBtn}>
                        <span className={style.lineBtn}></span>
                        <span className={style.lineBtn}></span>
                        <span className={style.lineBtn}></span>
                    </button>
                    <div className={style.catalogMenu}>
                        <NavLink to={'/women-shop/'}><img src={logo} alt=""/></NavLink>

                        <div className={style.listItems}>
                            <CatalogMenuItem/>
                        </div>
                    </div>
                </div>

                <div className={style.rightMenu}>
                    <div className={style.searchInput}>
                        <span><img src={searchLogo} alt=""/></span>
                        <input type="text" placeholder={"Поиск"}/>
                    </div>
                    <div className={style.menuBtn}>
                        {/*<button onClick={()=>handleLogInModal()} className={style.basketBtn}><NavLink to={"/women-shop/favorites/userData/"}>*/}
                            <button className={style.basketBtn}><NavLink to={"/women-shop/favorites/userData/"}>
                            <img src={userLogo} alt=""/>
                        </NavLink>
                            </button>
                        <button className={style.basketBtn}><NavLink to={"women-shop/favorites"}>
                            {favorites.length > 0 ? <img src={heartFill} alt=""/> : <img src={favritesLogo} alt=""/>}</NavLink></button>
                        <button onClick={()=>handleBasketModal()} className={style.basketBtn}>
                            <img src={basketLogo} alt=""/>
                            {basket.length > 0 && <span className={style.countBasket}>{basket.length}</span>}
                        </button>

                    </div>
                </div>
            </div>
            {isBasketModal && <Basket onClose={handleBasketModal}/>}
            {/*{isLogin && <LogIn onClose={handleLogInModal}/>}*/}
        </header>
    )

}
let mapStateToProps = (state)=>{
    return{
        basket:state.initBasket.basket,
        favorites: state.catalogItems.favorites
    }
}
export default connect(mapStateToProps, {setCategoryName})(Header)