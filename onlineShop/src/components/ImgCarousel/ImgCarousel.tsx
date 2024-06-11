import { FC } from 'react'
import styles from './ImgCarousel.module.css' 

type headerProps = {
    srcValue:string,
    styleCss:string,
    pickMainImg:(value:string)=>void,
}


export const ImgCarousel:FC<headerProps>= ({srcValue,styleCss,pickMainImg}) => {

    const handleClickImg = () =>{
        pickMainImg(srcValue)
    }

    return(
        <img src={srcValue} className={styles[styleCss]} onClick={handleClickImg} alt=''></img>
    )
}