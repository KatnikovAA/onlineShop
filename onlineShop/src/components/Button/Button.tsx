import { FC } from "react"
import styles from './Button.module.css'

type buttonProps ={
    imgFlg?:boolean,
    value:string,
    styleCss:string,
}
export const Button:FC<buttonProps> = ({value,styleCss,imgFlg = false}) =>{
    return(
        <button className={styles[styleCss]}>
            {
                imgFlg ? <img  alt ='' src={value} className={styles.cartImg}/> : value //в дальнейшем избавлюсь от такой конструкции сейчас использовал для заглушки
            }
        </button>
    )
}