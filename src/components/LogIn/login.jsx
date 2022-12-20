import React, {useState} from "react";
import style from "./login.module.css"
import Portal from "../portal/portal";
import {connect} from "react-redux";
import {logInData} from "../../Redux/login-reducer";




const LogIn = ({onClose,logInData})=>{
    const [data, setData] = useState({
        login:'',
        password:''
    })
    const handleChange = (e)=>{
        const {value, name} =e.target
        setData({
            ...data,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        logInData(data)
        onClose();
    }
    return(
        <div className={style.loginForm}>
            <div className={style.headerLogin}>
                <p className={style.titleLogin}>Войдите в личный кабинет</p>
                {/*<button onClick={() => onClose()} className={style.closeBtn}>&#215;</button>*/}
            </div>
            <div className={style.bodyLogin}>
                <form onSubmit={handleSubmit}>
                    <input name="login" value={data.login} onChange={handleChange} type="text"
                           placeholder={'Логин'}/><br/>
                    <input name="password" value={data.password} onChange={handleChange} type="text"
                           placeholder={"Пароль"}/><br/>
                    <label>Введите любой логин и пароль</label><br/>

                    <div className={style.footerLogin}>
                        <button type={'submit'} className={style.loginBtn}>Войти в кабинет</button>
                    </div>
                </form>
            </div>

        </div>
    )

}
export default connect(null, {logInData})(LogIn)