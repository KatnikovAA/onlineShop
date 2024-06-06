import { FC } from "react"
import styles from './Button.module.css'

type buttonProps ={
    imgFlg?:boolean,
    text:string,
    styleCss:string,
}
export const Button:FC<buttonProps> = ({text,styleCss,imgFlg = false}) =>{
    return(
        <button className={styles[styleCss]}>
            {
                imgFlg ? <img  src={text} className={styles.cartImg}/> : text //в дальнейшем избавлюсь от такой конструкции сейчас использовал для заглушки
            }
        </button>
    )
}