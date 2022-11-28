import React from "react";
import {NavLink, useLocation, useParams} from "react-router-dom";
import './catalog.css'
import Item from "../Item/item";
import usePageData from "../../HOk/usePageData";
import {useEffect} from "react";
import firebase from "../../utils/fb-config";
import {connect} from "react-redux";
import {setAllDataCatalog, setCatalogItems, setTEst} from "../../Redux/catalog-reducer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const CatalogPage = ({setAllDataCatalog, productsCategory,allData, setTEst,subcategory,mainCategory})=>{
    const params = useParams()
    const id = params.testID
    console.log(params)
    useEffect(() => {
        firebase
            .database()
            .ref()
            .child(params.products)
            .once('value')
            .then(data => setAllDataCatalog(data.val()))
    },[params.products]);


    return(

        <div className="mainPageCatalog">
            <div><span>Главная/{mainCategory}/{id}</span></div>

            <h2>{mainCategory}</h2>
            <div className='catalogBody'>
                <nav className='navigate'>
                    {productsCategory ? productsCategory.map(item => {return <NavLink className="linkNav" to={`/women-shop/${params.products}/${item.path}`}>{item.category}</NavLink>})
                        : <p>загрузка</p>}
                </nav>
                <div className='catalogItems'>
                    <Routes>
                        <Route path="" element={<Item/>}/>
                        {productsCategory.map(item => {return <Route path=":testID/" element={<Item path={params.products}/>}/>})}
                    </Routes>
                </div>
            </div>
        </div>
    )
}
let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        mainCategory: state.catalogItems.women.category,
    }
}
export default connect(mapStateToProps, {setAllDataCatalog, setTEst})(CatalogPage)