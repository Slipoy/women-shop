import React from "react";
import usePageData from "../../../HOk/usePageData";
import {NavLink} from "react-router-dom";
import style from  "../../Header/header.module.css"


const CatalogMenuItem = () => {
    const catalogMenuItems = usePageData('categories')
    console.log(catalogMenuItems)
    return (
        <div className={style.listItem}>
            {catalogMenuItems ? catalogMenuItems.map(item => {
                    return <NavLink className={style.categoriesName} to={"women-shop/" + item.path}>{item.name}</NavLink>
                })
                : <>
                    <li>Женщинам</li>
                    {/*<li>Мужчинам</li>*/}
                    {/*<li>Детям</li>*/}
                    {/*<li>Обувь</li>*/}
                    {/*<li>Игрушки</li>*/}
                    {/*<li>Аксессуары</li>*/}
                    {/*<li>Большие размеры</li>*/}
                    {/*<li>Дополнительно</li>*/}
                    {/*<li>Акции</li>*/}
                </>}
        </div>
    )
}

export default CatalogMenuItem