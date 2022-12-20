import React, {useState} from "react";
import Portal from "../portal/portal";
import style from "./modalReviews.module.css"
import styleBasket from  "../../components/Basket/basket.module.css"
import {connect} from "react-redux";
import {logInData} from "../../Redux/login-reducer";
import {addReviews} from "../../Redux/reviewsReducer";


const ModalReviews = ({addReviews,onClose})=>{
    const [data, setData] = useState({
        nameUser: "",
        reviewsText: "",
        data: new Date(Date.now()).toLocaleString(),

    })
    const handleChange = (e)=>{
        const {value, name} = e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const handleSubmit = () => {
        addReviews(data)
        onClose();
    }


    return(
        <Portal>
            <div className={style.modalWrapper}>
                <div className={style.reviewsBody}>
                    <div className={style.headerReviws}>
                        <h2>Ваш отзыв</h2>
                    </div>
                    <div className={style.reviewInput}>
                            <input name={"nameUser"} value={data.nameUser} onChange={handleChange} type="text" placeholder={"Фамилия и имя"} required/><br/>
                            <textarea  name={"reviewsText"} value={data.reviewsText} onChange={handleChange} placeholder={"Отзыв"} required ></textarea>
                    </div>
                    <div className={style.footerReviews}>
                    <button onClick={handleSubmit} className={styleBasket.orderBtn}>Добавить отзыв</button>
                    </div>

                </div>
            </div>
        </Portal>
    )
}
export default connect(null, {addReviews})(ModalReviews)