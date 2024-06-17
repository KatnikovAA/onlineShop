import { FC } from "react"
import styles from './Button.module.css'

type buttonProps ={
    imgFlg?:boolean,
    value:string,
    styleCss:string,
    onClick?:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void,
    styleImg?:string,
}

export const Button:FC<buttonProps> = ({value,styleCss,imgFlg = false,onClick,styleImg = 'cartImg'}) =>{

    const handleClickButton  = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        if(onClick)
            onClick(event)
    }

    return(
        <button className={styles[styleCss]} onClick={handleClickButton}>
            {
                imgFlg ? <img  alt ='' src={value} className={styles[styleImg]}/> : value //в дальнейшем избавлюсь от такой конструкции сейчас использовал для заглушки
            }
        </button>
    )
}