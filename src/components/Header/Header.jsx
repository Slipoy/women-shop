import React from "react";
import style from "./header.module.css"
import basketLogo from  '../../assets/header/basket.png';
import favritesLogo from  '../../assets/header/favorites.png'
import userLogo from '../../assets/header/icon.png'
import searchLogo from "../../assets/header/icon-searcр.png"





const Header = ()=>{
    return (
        <header>
            <div className={style.header}>
                <button className={style.mainMenuBtn}>
                    <span className={style.lineBtn}></span>
                    <span className={style.lineBtn}></span>
                    <span className={style.lineBtn}></span>
                </button>
                <div className={style.rightMenu}>
                    <div className={style.searchInput}>
                        <span><img src={searchLogo} alt=""/></span>
                        <input type="text" placeholder={"Поиск"}/>
                    </div>
                    <div className={style.menuBtn}>
                        <button className={style.basketBtn}><img src={userLogo} alt=""/></button>
                        <button className={style.basketBtn}><img src={favritesLogo} alt=""/></button>
                        <button className={style.basketBtn}><img src={basketLogo} alt=""/></button>
                    </div>
                </div>

            </div>
        </header>
    )

}
export default Header