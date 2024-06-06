import { FC } from "react"
import styles from './Button.module.css'

type buttonProps ={
    text:string,
    styleCss:string
}
export const Button:FC<buttonProps> = ({text,styleCss}) =>{
    return(
        <button className={styles[styleCss]}>
            {text}
        </button>
    )
}