import React from "react";
import usePageData from "../../../HOk/usePageData";
import {NavLink} from "react-router-dom";
import style from  "../../Header/header.module.css"
import {connect} from "react-redux";
import {setCatalogItems, setCategoryName} from "../../../Redux/catalog-reducer";
import {useEffect} from "react";
import firebase from "../../../utils/fb-config";


const CatalogMenuItem = ({categoryName, setCategoryName}) => {
    useEffect(() => {
        firebase
            .database()
            .ref()
            .child("categories")
            .once('value')
            .then(data => setCategoryName(data.val()))
    },["categories"]);
    return (
        <div className={style.listItem}>
            {categoryName ? categoryName?.map(item => {
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

let mapStateToProps = (state)=>{
    return{
        categoryName: state.catalogItems.category
    }
}
export default connect(mapStateToProps, {setCategoryName})(CatalogMenuItem)