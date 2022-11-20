import React from "react";
import style from   "./questions.module.css"
import styleHomePage from '../HomePage/homePage.module.css'



const Questions = ()=>{
    return(
        <div>
            <h2 className={`${styleHomePage.stockHeader} ${style.questionsHeader}`}>Часто задаваемые вопросы</h2>
            <div className={style.sectionQuestions}>
                <div className={style.questions}>
                    <p>Как сделать заказ?</p>
                    <span>+</span>
                    <div className={style.answer}>Тут будет какой-то ответ!</div>
                </div>
                <div className={style.questions}>
                    <p>Способы оплаты</p>
                    <span>+</span>
                    <div className={style.answer}>Тут будет какой-то ответ!</div>
                </div>
                <div className={style.questions}>
                    <p>Доставка</p>
                    <span>+</span>
                    <div className={style.answer}>Тут будет какой-то ответ!</div>
                </div>
                <div className={style.questions}>
                    <p>Сроки доставки</p>
                    <span>+</span>
                    <div className={style.answer}>Тут будет какой-то ответ!</div>
                </div>
                <div className={style.questions}>
                    <p>Как сделать обмен?</p>
                    <span>+</span>
                    <div className={style.answer}>Тут будет какой-то ответ!</div>
                </div>
                <div className={style.questions}>
                    <p>Как сделать возврат?</p>
                    <span>+</span>
                    <div className={style.answer}>Тут будет какой-то ответ!</div>
                </div>
                <div className={style.questions}>
                    <p>Куда и когда вернутся деньги за возвращённый товар?</p>
                    <span>+</span>
                    <div className={style.answer}>Тут будет какой-то ответ!</div>
                </div>


            </div>
        </div>
    )
}

export default Questions