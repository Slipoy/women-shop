import React from "react";
import Portal from "../portal/portal";
import style from './tableSazi.module.css'
import sizeImg from "../../assets/sizeTable/table.svg"


const TableSize = ({onClose})=>{
    return(
        <Portal>
            <div className={style.modalSize}>
                <div onClick={onClose} className={style.sizeSection}>
                    <div className={style.sizeHeader}>
                        <button className={style.closeBtn}>&#215;</button>
                        <h2>Таблица для определения женских размеров</h2>
                    </div>
                    <div className={style.tableSize}>
                        <img src={sizeImg} alt=""/>
                    </div>
                    <div className={style.descriptionSize}>
                    <p>
                        Все модели, предоставленные на страницах чаще соответсвуют размерам,<br/>
                        т.к. замеров для каждой модели у нас нет, мы предоставляем размерную таблицу поставщика,
                        но по ней могут быть минимальные расхождени, она не 100% идёт под модель <br/>
                        Маркировка S, M, L, XL у каждого поставщика своя, у кого-то 42-S, у кого-то 42-M
                    </p>
                    </div>
                </div>
            </div>
        </Portal>

    )
}
export default TableSize