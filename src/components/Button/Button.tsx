import { FC } from "react"
import styles from './Button.module.css'


type buttonProps ={
    imgFlg?:boolean,
    value:string,
    styleCss:string,
    onClickEvent?:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    onClickNumber?:(value: number) => void,
    styleImg?:string,
    idProduct?:number,
}

export const Button:FC<buttonProps> = ({onClickEvent,idProduct,value,styleCss,imgFlg = false,onClickNumber,styleImg = 'cartImg'}) =>{

    const handleClickButton  = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        if(onClickEvent){
            onClickEvent(event);
        }
        else if(onClickNumber && idProduct){
            onClickNumber(idProduct);
        }
    }

    return(
        <button className={styles[styleCss]} onClick={handleClickButton}>
            {
                imgFlg ? <img  alt ='' src={value} className={styles[styleImg]}/> : value //в дальнейшем избавлюсь от такой конструкции сейчас использовал для заглушки
            }
        </button>
    )
}