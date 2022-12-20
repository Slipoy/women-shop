import React from "react";
import style from "./reviews.module.css"
import user1Logo from '../../assets/users/Ellipse 8.png'
import star from '../../assets/star/Vector (1).png'
import styleItems from "../ItemsTest/items.module.css"
import {compose} from "redux";
import {connect} from "react-redux";
import {setAllDataCatalog, setCatalogItems} from "../../Redux/catalog-reducer";
import {withRouter} from "../../HOk/withRouter";
import reviewsData from "../../Redux/reviewsReducer";
import {useState} from "react";
import ModalReviews from "../ModalReviews/modalReviews";



const Reviews =({router,reviewsData})=>{
    const itemId = router.params.itemId
    const initStars = (count)=>{
        let starsArray = []
        for (let i = 0; i < count; i++){
            starsArray.push(i)
        }
        return  starsArray
    }
    const [itemsPerPage, setItemsPerPage] = useState(2)
    const [currentPage, setCurrentPage] = useState(1)
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    let currentItems = reviewsData.slice(firstItemIndex, lastItemIndex)

    const nextHiddenReviews = (index)=>{
        const step = index
        setCurrentPage( currentPage + 1)
    }
    const backHiddenReviews = (index)=>{
        const step = index
        setCurrentPage( 1)
    }
    const [isReviewsModal, setReviewsModal] = useState(false)
    const closeRaviewsModal = ()=>{
        setReviewsModal(!isReviewsModal)
    }
    console.log(lastItemIndex + " " + reviewsData.length)


    return(
        <section>
            <h2>{itemId ? "Отзывы о товаре" : "Отзывы наших покупателей"}</h2>
            <div className={style.reviewsBody}>
                <div className={style.reviewsSection}>
                    {currentItems.map(item => {
                        return <div className={style.reviewsCard}>
                            <div className={style.reviewBody}>
                                <img src={user1Logo} alt=""/>
                                <div className={style.reviews}>
                                    <div className={style.headerReviewsItem}>{initStars(5).map((item, index)=><img key={index} src={star} alt=""/>)}</div>
                                    <div className={style.descriptionReviewsItem}>{item.reviewsText}</div>
                                    <div className={style.footerReviewsItem}>
                                        <span className={style.nameUser}>{item.nameUser}</span>
                                        <span className={style.dataPost}>{item.data}</span>
                                    </div>
                                </div>
                            </div>
                        </div> })}



                </div>
                <div className={style.btnMoreSection}>
                    {lastItemIndex > reviewsData.length || lastItemIndex === reviewsData.length  ?
                        <button  onClick={backHiddenReviews} className={`${styleItems.btnMore} ${style.btnMore}`}>
                            <div className={`${styleItems.arrowBtn} ${style.arrowBtn}`}>
                                Назад
                            </div>
                        </button> :
                        <button  onClick={nextHiddenReviews} className={`${styleItems.btnMore} ${style.btnMore}`}>
                        <div className={`${styleItems.arrowBtn} ${style.arrowBtn}`}>
                        <div className={`${styleItems.line} ${style.line}`}></div>
                        <div className={`${styleItems.triangleRight} ${style.triangleRight}`}></div>
                        </div>
                        </button>}

                </div>
            </div>


            <button onClick={closeRaviewsModal} className={`${styleItems.btnMore} ${style.addReview}`}>Добавить отзыв</button>
            {isReviewsModal && <ModalReviews onClose={closeRaviewsModal}/>}

        </section>
    )
}
let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        mainCategory: state.catalogItems.women.category,
        stock: state.catalogItems.stock,
        reviewsData: state.reviewsData.reviewsData
    }
}

export default compose(connect(mapStateToProps, {setAllDataCatalog,setCatalogItems}),withRouter)(Reviews)