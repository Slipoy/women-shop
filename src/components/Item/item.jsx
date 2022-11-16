import React from "react";
import item from "../../assets/items/Rectangle 23.png"




const Item = ()=>{
    return(
        <div>
            <img src={item} alt=""/>
            <div>
                <span>500грн</span>
            </div>
            <div>
                <p>очень красивая что-то</p>
                <button></button>
                <button></button>
            </div>
            <div>
                <button></button>
                <span></span>
            </div>

        </div>
    )
}
export default Item