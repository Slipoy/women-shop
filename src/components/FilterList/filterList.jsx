import React, {useState} from "react";
import style from "../Catalog/catalog1.module.css"




const FilterList = ({category, path,filterAdd})=>{
    const [isChecked, setIsChecked] = useState(false)
    return(
        <div className={style.filterTitle}>
            <label htmlFor="">{category}</label>
            <input onChange={()=>filterAdd(path, isChecked)} checked={isChecked} onClick={()=>setIsChecked(!isChecked)} type="checkbox"/>
        </div>

    )
}


export default FilterList