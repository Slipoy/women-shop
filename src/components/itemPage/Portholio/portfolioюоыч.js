import React, {useEffect} from "react";
import style from "../itemPage.module.css";
import img1 from "../items/Rectangle 53.png";
import img2 from "../items/Rectangle 54.png";
import img3 from "../items/Rectangle 55.png";
import img4 from "../items/Rectangle 56.png";
import {useState} from "react";



const Portfolio = ({item, src})=>{

    console.log(src)
    const [collection, setColection] = useState({})

    useEffect(()=>{
        setColection({
            ...collection,
            imgMain: src,
            img1,
            img2,
            img3,
            img4,
            }
        );


        }, [src])



    const testFun = (e)=>{

        const {key, value} = e.target.dataset
        if (key && value)
        setColection({
            ...collection,
            imgMain: value,
            [key]: collection.imgMain
        })
    }



    return(
       <>

               <div className={style.mainImg}>
                   <img src={collection.imgMain} data-value={"wer"} alt=""/>
               </div>

               <div onClick={testFun} className={style.imgColection}>
                   <img data-key={"img1"} data-value={collection.img1} src={collection.img1} alt=""/>
                   <img data-key={"img2"} data-value={collection.img2} src={collection.img2} alt=""/>
                   <img data-key={"img3"} data-value={collection.img3} src={collection.img3} alt=""/>
                   <img data-key={"img4"} data-value={collection.img4} src={collection.img4} alt=""/>
               </div>

       </>
    )
}
export default Portfolio