import React from "react";
import style from "./reviews.module.css"
import user1Logo from '../../assets/users/Ellipse 8.png'
import star from '../../assets/star/Vector (1).png'
import styleItems from "../ItemsTest/items.module.css"
import {compose} from "redux";
import {connect} from "react-redux";
import {setAllDataCatalog, setCatalogItems} from "../../Redux/catalog-reducer";
import {withRouter} from "../../HOk/withRouter";



const Reviews =({router})=>{
    const itemId = router.params.itemId
    const initStars = (count)=>{
        let starsArray = []
        for (let i = 0; i < count; i++){
            starsArray.push(i)
        }
        return  starsArray
    }

    return(
        <section>
            <h2>{itemId ? "Отзывы о товаре" : "Отзывы наших покупателей"}</h2>
            <div className={style.reviewsSection}>
                <div className={style.reviewsCard}>
                    <div className={style.reviewBody}>
                        <img src={user1Logo} alt=""/>
                        <div className={style.reviews}>
                            <div className={style.headerReviewsItem}>{initStars(5).map((item, index)=><img key={index} src={star} alt=""/>)}</div>
                            <div className={style.descriptionReviewsItem}>Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. </div>
                            <div className={style.footerReviewsItem}>
                                <span className={style.nameUser}>Анна Котлова</span>
                                <span className={style.dataPost}>23.05.2021</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.reviewsCard}>
                    <div className={style.reviewBody}>
                        <img src={user1Logo} alt=""/>
                        <div className={style.reviews}>
                            <div className={style.headerReviewsItem}>{initStars(5).map((item, index)=><img key={index} src={star} alt=""/>)}</div>
                            <div className={style.descriptionReviewsItem}>Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо. </div>
                            <div className={style.footerReviewsItem}>
                                <span className={style.nameUser}>Анна Котлова</span>
                                <span className={style.dataPost}>23.05.2021</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className={`${styleItems.btnMore} ${style.btnMore}`}>
                        <div className={`${styleItems.arrowBtn} ${style.arrowBtn}`}>
                            <div className={`${styleItems.line} ${style.line}`}></div>
                            <div className={`${styleItems.triangleRight} ${style.triangleRight}`}></div>
                        </div>
                    </button>
                </div>
            </div>

            <button className={`${styleItems.btnMore} ${style.addReview}`}>Добавить отзыв</button>

        </section>
    )
}
let mapStateToProps = (state)=>{
    return{
        allData: state.catalogItems.women.allData,
        productsCategory:state.catalogItems.women.products,
        mainCategory: state.catalogItems.women.category,
        stock: state.catalogItems.stock,
    }
}

export default compose(connect(mapStateToProps, {setAllDataCatalog,setCatalogItems}),withRouter)(Reviews)