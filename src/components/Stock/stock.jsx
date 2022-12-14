import React from "react";
import style from "../HomePage/homePage.module.css";
import Slider from "react-slick";
import ItemCard from "../ItemsTest/itemCard";
import {connect} from "react-redux";
import {setAllDataCatalog, setCatalogItems} from "../../Redux/catalog-reducer";
import {compose} from "redux";
import {withRouter} from "../../HOk/withRouter";
import {useEffect} from "react";
import firebase from "../../utils/fb-config";



const Stock = ({stock,router,setCatalogItems,currentData,test})=>{
    useEffect(() => {

        firebase
            .database()
            .ref()
            .child("stock")
            .once('value')
            .then(data => (data.val()))
    },["stock"]);
    const itemId = router.params.itemId
    const settings = {
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1
    }
    return (
        <section className={style.stock}>
            {itemId ?  <h2>С этим товаром также покупают</h2>:<h2 className={style.stockHeader}>Успей купить!</h2>}

            <div className={style.stockItems}>
                <Slider {...settings}>
                    {stock ?  stock.map((item,index)=> <ItemCard key={index} {...item}/>) : <p>загрузка</p>}
                </Slider>
            </div>

        </section>
    )
}


let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        ///тут была сток дата !!!
        stock: state.catalogItems.stock.data,
        testAllData: state.catalogItems.allData,
        test:state.catalogItems.currentData
    }
}
export default compose(connect(mapStateToProps, {setAllDataCatalog,setCatalogItems}),withRouter) (Stock)