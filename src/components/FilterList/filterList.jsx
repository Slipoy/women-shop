import React, {useState} from "react";
import style from "../Catalog/catalog1.module.css"
import {filterForData} from "../../Redux/catalog-reducer";




const FilterList = ({category, path,filterForData})=>{
    const [isChecked, setIsChecked] = useState(false)

    return(
        <div className={style.filterTitle}>
            <label htmlFor="">{category}</label>
            <input onChange={()=>filterForData(path, isChecked)} checked={isChecked} onClick={()=>setIsChecked(!isChecked)} type="checkbox"/>
        </div>

    )
}


export default FilterList