import React from "react";
import style from './formInvate.module.css'
import styleHome from "../ItemsTest/items.module.css"



const FormInvitation = ()=>{
    return(
        <div className={style.sectionFormInvitation}>
            <div className={style.shellForm}>
                <div className={style.form}>
                    <h3>Приглашаем к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</h3>
                    <form action="">
                        <input className={`${style.input}`} type="name" placeholder={"Ваше имя"}/><br/>
                        <input className={`${style.input}`} type="number" placeholder={"Номер телефона"}/><br/>
                        <input className={`${style.input}`} type="email" placeholder={"Ваша почта"}/><br/>
                        <div className={style.agreement}>
                            <input className={style.checkBox} type="radio" />
                            <label htmlFor="">Даю согласие на обработку персональных данных</label>
                        </div>

                    </form>
                    <button className={`${styleHome.btnMore} ${style.btnMore}`}>Отправить
                        <div className={`${styleHome.arrowBtn} ${style.arrowBtn}`}>
                            <div className={`${styleHome.line} ${style.line}`}></div>
                            <div className={`${styleHome.triangleRight} ${style.triangleRight}`}></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default FormInvitation