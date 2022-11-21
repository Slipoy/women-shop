import React from "react";
import style from "../Header/header.module.css";
import logo from "../../assets/header/logo.png";
import CatalogMenuItem from "./catalogMenuItem/catalogmenuItem";


const CatalogMenu = ()=>{
    return(
        <>
            <div className={style.catalogMenu}>
                <img src={logo} alt=""/>
                <div className={style.listItems}>
                    <CatalogMenuItem/>
                </div>
            </div>
        </>

    )
}
export default CatalogMenu