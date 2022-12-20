import React, { useState } from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "../../HOk/withRouter";
import style from "./itemPage.module.css"
import {useEffect} from "react";
import firebase from "../../utils/fb-config";
import {
    addToFavorites, deleteToFavorites,
    setAllDataCatalog,
    setCatalogItems,
    updateBasketStatus,
    updateFavoritesStatus
} from "../../Redux/catalog-reducer";
import star from    '../../assets/star/Vector (3).png'
import heartFill from   '../../assets/header/fillHeart.jpeg'

import Reviews from "../Reviews/reviews";
import Stock from "../Stock/stock";
import {NavLink} from "react-router-dom";
import {addToBasket, deleteToBasket} from "../../Redux/basket";
import TableSize from "../TableSize/TableSize";

import Portfolio from "./Portholio/portfolioюоыч";
import ModalReviews from "../ModalReviews/modalReviews";










const ItemPage = ({router,setAllDataCatalog,currentData,addToBasket,updateBasketStatus,deleteToBasket,addToFavorites,
                      updateFavoritesStatus,deleteToFavorites,basket})=>{
    const itemId = router.params.itemId


    let itemInfo = [...currentData?.filter(item => item.id === itemId)]
    useEffect(() => {
        if (currentData.length === 0){
            firebase
                .database()
                .ref()
                .child("women")
                .once('value')
                .then(data => setAllDataCatalog(data.val()))
        }

    },["women"]);
    const src = itemInfo.map(item=> require(`../ItemsTest/${item.image}`))

    const initStars = (count)=>{
        let starsArray = []
        for (let i = 0; i < count; i++){
            starsArray.push(i)
        }
        return  starsArray
    }
    const addBasket = (id, price, name)=>{

        const data = {
            name: name,
            price: price,
            id: id,
            count: 1
        }
        addToBasket(data)
        updateBasketStatus(id)
        console.log(basket)
    }
    const handleDeleteBasket = (id)=>{
        updateBasketStatus(id)
        deleteToBasket(id)
    }
    const addFavorites = (id)=>{
        addToFavorites(id)
        updateFavoritesStatus(id)
    }
    const handleDeleteFavorites = (id)=>{
        updateFavoritesStatus(id)
        deleteToFavorites(id)

    }
    const [isTableModal, setIsTableModal] = useState(false)
    const closeTableSize = ()=>{
        setIsTableModal(!isTableModal)
    }
    const [isReviewsModal, setReviewsModal] = useState(false)
    const closeRaviewsModal = ()=>{
        setReviewsModal(!isReviewsModal)
    }



    return(
        <div className={style.itemPage}>
            <div>
                {itemInfo ? itemInfo.map(item => <><div className={style.pagePath}>
                        <NavLink className={style.path} to={'/women-shop'}>Главная</NavLink>
                        <NavLink className={style.path} to={"/women-shop/catalog/women"}>/Женщинам</NavLink>
                        <span>/{item.name}</span>
                    </div>
                        <h2>{item.name} <span className={style.artItem}>Арт {itemId}</span></h2>

                    <div className={style.bodyItemPage}>
                        <div  className={style.imagesItem}>
                            <Portfolio item={item} src={src}/>
                        </div>
                            <div className={style.descriptionItem}>
                                <span className={style.priceItem}>{item.price} грн</span>
                                <div className={style.initColor} >
                                    <span className={style.title}>Цвета</span>
                                    <div className={style.colorCheck}>
                                        <span className={style.color1}></span>
                                        <span className={style.color2}></span>
                                        <span className={style.color3}></span>
                                        <span className={style.color4}></span>
                                        <span className={style.color5}></span>
                                    </div>
                                </div>
                                <div className={style.sizeTitle}>
                                    <span className={style.title}>Размеры</span>
                                    <div className={style.btnSize}>
                                        <button>S <span>42</span></button>
                                        <button>L <span>44</span></button>
                                        <button>XL <span>46</span></button>
                                        <button>M <span>48</span></button>
                                    </div>
                                    <span onClick={closeTableSize} className={`${style.tableSize} ${style.upperLineText}`}>Таблица размеров</span>

                                </div>
                                <div className={style.favoritesAndBasketBtn}>
                                    {item.isBasket ?
                                        <button onClick={()=>handleDeleteBasket(item.id)} className={`${style.basketBtn} ${style.isBasketBtn}`}>Удалить из
                                        <span></span>
                                    </button>
                                        :
                                        <button onClick={()=>addBasket(item.id, item.price, item.name)} className={`${style.basketBtn} `}>В корзину
                                        <span></span>
                                    </button>}

                                    {item.isFavorites ? <span onClick={()=>handleDeleteFavorites(item.id)} className={style.isFavorites}><img src={heartFill} alt=""/></span> :
                                        <svg onClick={()=>addFavorites(item.id)} className={style.favoritesBtn} width="34" height="31" viewBox="0 0 34 31"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.7797 30.3308C16.5526 30.3301 16.3321 30.2542 16.1527 30.115C10.4383 25.675 6.50191 21.8517 3.74747 18.0797C0.232467 13.2594 -0.5692 8.80916 1.36302 4.85222C2.74025 2.02583 6.69719 -0.286672 11.3222 1.05972C13.5273 1.69667 15.4513 3.06263 16.7797 4.93444C18.1081 3.06263 20.0321 1.69667 22.2372 1.05972C26.8519 -0.266117 30.8191 2.02583 32.1964 4.85222C34.1286 8.80916 33.3269 13.2594 29.8119 18.0797C27.0575 21.8517 23.1211 25.675 17.4066 30.115C17.2272 30.2542 17.0068 30.3301 16.7797 30.3308V30.3308ZM8.69108 2.73499C7.59059 2.69216 6.49921 2.94985 5.5341 3.48039C4.56899 4.01093 3.76659 4.79429 3.21302 5.74638C1.61997 9.01472 2.33941 12.653 5.41247 16.8567C8.6783 21.0691 12.5025 24.8172 16.7797 27.9978C21.0562 24.8204 24.8804 21.0757 28.1469 16.8669C31.2303 12.653 31.9394 9.01472 30.3464 5.75666C29.3186 3.70111 26.2353 2.06694 22.8025 3.03305C21.7018 3.35834 20.6814 3.91048 19.8069 4.65393C18.9325 5.39738 18.2234 6.31568 17.7252 7.34972C17.6478 7.53822 17.5161 7.69945 17.3468 7.81292C17.1775 7.92639 16.9783 7.98697 16.7746 7.98697C16.5708 7.98697 16.3716 7.92639 16.2023 7.81292C16.033 7.69945 15.9013 7.53822 15.8239 7.34972C15.3295 6.31309 14.6216 5.39265 13.7466 4.64874C12.8716 3.90482 11.8493 3.35423 10.7466 3.03305C10.0786 2.83901 9.38676 2.7387 8.69108 2.73499V2.73499Z" fill="#514A7E"/>
                                            <rect fill="#514a7e"/> </svg>
                                    }
                                </div>
                                <div className={style.reviews}>
                                    <div className={style.stars}>
                                        {initStars(item.stars).map((item, index)=> <img key={index} src={star} alt=""/>)}
                                    </div>
                                    <div className={style.reviewsBtn}>
                                        {/*<span className={`${style.upperLineText} ${style.allReviews}`}>Смотреть все отзывы</span>*/}
                                        <span onClick={closeRaviewsModal} className={`${style.upperLineText} ${style.addReview}`}>Добавить отзыв</span>
                                    </div>
                                </div>
                                <div className={style.description}>
                                    <span className={style.title}>Описание</span>
                                    <p>Здесь будет какое-то неболшое описание о вещи
                                        Здесь будет какое-то неболшое описание о вещи</p>
                                </div>
                            </div>
                        </div></>

                ) : <p>loading</p>}

            </div>

            <Reviews/>
            <Stock/>
            {isTableModal && <TableSize onClose={closeTableSize}/>}
            {isReviewsModal && <ModalReviews onClose={closeRaviewsModal}/>}
        </div>
    )
}

let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        mainCategory: state.catalogItems.women.category,
        stock: state.catalogItems.stock,
        currentData: state.catalogItems.currentData,
        basket:state.initBasket.basket,
    }
}


export default compose(connect(mapStateToProps, {setAllDataCatalog,
    setCatalogItems,
    addToBasket,
    updateBasketStatus,
    deleteToBasket,
    addToFavorites,
    updateFavoritesStatus,
    deleteToFavorites
}),withRouter)(ItemPage)