import React from "react";
import {NavLink, useParams} from "react-router-dom";
import './catalog.css'
import Item from "../Item/item";
import usePageData from "../../HOk/usePageData";



const CatalogPage = ()=>{
    const {products} = useParams()
    console.log({products})
    const allData = usePageData(products)
    console.log(allData)
    const testData = allData && allData.products.map(item => item.data).flat(Infinity)


    return(
        <div className="mainPageCatalog">
            <h2>{allData && allData.category}</h2>
            <div className='catalogBody'>
                <nav className='navigate'>
                    {allData ? allData.products.map(item => {return <NavLink className="linkNav" to={item.path}>{item.category}</NavLink>})
                        : <p>загрузка</p>}
                </nav>
                <div className='catalogItems'>
                    {allData ? testData.map(item=> <Item {...item}/>) : <p>загрузка</p> }
                </div>
            </div>


        </div>
    )
}
export default CatalogPage