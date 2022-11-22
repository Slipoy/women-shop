import React from "react";
import {NavLink} from "react-router-dom";
import './catalog.css'
import Item from "../Item/item";
import usePageData from "../../HOk/usePageData";



const Catalog = ()=>{
    const allData = usePageData("women")
    const data = allData && allData.length
    return(
        <div className="mainPageCatalog">

            <h2>{allData && allData.category}</h2>
            <div className='catalogBody'>
                <nav className='navigate'>
                    {allData ? allData.products.map(item => {return <NavLink className="linkNav" to={"women-shop/*"}>{item.category}</NavLink>})
                        : <p>загрузка</p>}
                </nav>
                <div className='catalogItems'>
                    <Item/>
                </div>
            </div>


        </div>
    )
}
export default Catalog