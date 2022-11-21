import React from "react";
import usePageData from "../../../HOk/usePageData";



const CatalogMenuItem = ()=>{
    const catalogMenuItems = usePageData('categories')
    console.log(catalogMenuItems)
    return(
        <ul>
            {catalogMenuItems ? catalogMenuItems.map(item => {return <li>{item.name}</li>})
                : <><li>Женщинам</li>
                {/*<li>Мужчинам</li>*/}
                {/*<li>Детям</li>*/}
                {/*<li>Обувь</li>*/}
                {/*<li>Игрушки</li>*/}
                {/*<li>Аксессуары</li>*/}
                {/*<li>Большие размеры</li>*/}
                {/*<li>Дополнительно</li>*/}
                {/*<li>Акции</li>*/}
            </>}
        </ul>
    )
}

export default CatalogMenuItem