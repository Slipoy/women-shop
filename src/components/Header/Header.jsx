import React from "react";
import style from "./header.module.css"
import basketLogo from  '../../assets/header/basket.png';
import favritesLogo from  '../../assets/header/favorites.png'
import userLogo from '../../assets/header/icon.png'
import searchLogo from "../../assets/header/icon-searcр.png"
import logo from '../../assets/header/logo.png'





const Header = ()=>{
    return (
        <header>
            <div className={style.header}>
                <div className={style.mainMenu}>
                    <button className={style.mainMenuBtn}>
                        <span className={style.lineBtn}></span>
                        <span className={style.lineBtn}></span>
                        <span className={style.lineBtn}></span>
                    </button>
                    <div className={style.catalogMenu}>
                        <img src={logo} alt=""/>
                        <div className={style.listItems}>
                            <ul>
                                <li>Женщинам</li>
                                <li>Мужчинам</li>
                                <li>Детям</li>
                                <li>Обувь</li>
                                <li>Игрушки</li>
                                <li>Аксессуары</li>
                                <li>Большие размеры</li>
                                <li>Дополнительно</li>
                                <li>Акции</li>
                            </ul>
                        </div>
                    </div>
                </div>

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