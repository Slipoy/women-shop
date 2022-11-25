import React from "react";
import {NavLink, useParams} from "react-router-dom";
import './catalog.css'
import Item from "../Item/item";
import usePageData from "../../HOk/usePageData";
import {useEffect} from "react";
import firebase from "../../utils/fb-config";
import {connect} from "react-redux";
import {setAllDataCatalog, setCatalogItems, setTEst} from "../../Redux/catalog-reducer";
import {BrowserRouter, Routes, Route} from "react-router-dom";



const CatalogPage = ({setAllDataCatalog, productsCategory,allData, setTEst,currentData})=>{
    const {products} = useParams()


    useEffect(() => {
        firebase
            .database()
            .ref()
            .child(products)
            .once('value')
            .then(data => setAllDataCatalog(data.val()))
    },[products]);

    return(
        <div className="mainPageCatalog">
            <h2>{allData && allData.category}</h2>
            <div className='catalogBody'>
                <nav className='navigate'>
                    {productsCategory ? productsCategory.map(item => {return <NavLink onClick={()=>setTEst(item.path)} className="linkNav" to={`/women-shop/${products}/${item.path}`}>{item.category}</NavLink>})
                        : <p>загрузка</p>}
                </nav>
                <div className='catalogItems'>
                    <Routes>
                        { productsCategory.map(item => { return <Route path={"/women-shop/" + products + "/" + item.path} element={<Item test={item.path}/>}/>})}
                    </Routes>
                    {/*{allData ? allData?.map(item=> <Item {...item}/>) : <p>загрузка</p> }*/}
                    <Item/>
                </div>
            </div>
        </div>
    )
}
let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        currentData: state.catalogItems.currentTest
    }
}
export default connect(mapStateToProps, {setAllDataCatalog, setTEst})(CatalogPage)