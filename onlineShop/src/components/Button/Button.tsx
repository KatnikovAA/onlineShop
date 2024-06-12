import { FC } from "react"
import styles from './Button.module.css'

type buttonProps ={
    imgFlg?:boolean,
    value:string,
    styleCss:string,
    onClick?:()=>void,
}

export const Button:FC<buttonProps> = ({value,styleCss,imgFlg = false,onClick}) =>{

    const handleClickButton  = () =>{
        onClick()
    }

    return(
        <button className={styles[styleCss]} onClick={handleClickButton}>
            {
                imgFlg ? <img  alt ='' src={value} className={styles.cartImg}/> : value //в дальнейшем избавлюсь от такой конструкции сейчас использовал для заглушки
            }
        </button>
    )
}