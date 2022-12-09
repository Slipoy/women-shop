import React, {useState} from "react";
import style from   "./questions.module.css"
import styleHomePage from '../HomePage/homePage.module.css'


const Questions = ()=>{
    const [isAnswer, setIsAnswer] = useState([
        {
            question: "Как сделать заказ?",
            answer: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар.",
            id: "1",
            isOpen: false
        },
        {
            question: "Способы оплаты",
            answer: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар.",
            id: "2",
            isOpen: false
        },
        {
            question: "Доставка?",
            answer: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар.",
            id: "3",
            isOpen: false
        },
        {
            question: "Сроки доставки?",
            answer: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар.",
            id: "4",
            isOpen: false
        },
        {
            question: "Как сделать обмен?",
            answer: "Чтобы сделать заказ пльзователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар.",
            id: "5",
            isOpen: false
        },
        {
            question: "Как сделать возврат?",
            answer: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар.",
            id: "6",
            isOpen: false
        },
        {
            question: "Куда и когда вернутся деньги за возвращённый товар?",
            answer: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар.",
            id: "7",
            isOpen: false
        }
        ])
    const showAnswer = (id)=>{
        let data = isAnswer.map(item => {if(item.id === id){
            item.isOpen = !item.isOpen
            return item
            }else return item
        }
        )
        setIsAnswer([...data])
        console.log(data)
    }


    return(
        <div>
            <h2 className={`${styleHomePage.stockHeader} ${style.questionsHeader}`}>Часто задаваемые вопросы</h2>
            <div  className={style.sectionQuestions}>
                {isAnswer.map((item, index) => <div onClick={()=>showAnswer(item.id)} key={index} className={style.questions}>
                    <div className={style.questBody}>
                        <p>{item.question}</p>
                        <span className={item.isOpen? style.closeBtn : style.openBtn}>+</span>
                    </div>

                    <div className={item.isOpen ? style.answer : style.answerCLose }>{item.answer}</div>
                </div>)}
            </div>
        </div>
    )
}

export default Questions