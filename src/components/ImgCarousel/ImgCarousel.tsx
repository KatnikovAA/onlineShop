import { FC } from 'react'
import styles from './ImgCarousel.module.css' 
import { useDispatch} from 'react-redux'
import { pickActivImg } from '../../redux/features/ditalProduct/ditalProductSlice'

type headerProps = {
    srcValue:string,
    styleCss:string,
}


export const ImgCarousel:FC<headerProps>= ({srcValue,styleCss}) => {

    const dispatch = useDispatch()

    const handleClickImg = () =>{
        dispatch(pickActivImg(srcValue))
    }

    return(
        <img src={srcValue} className={styles[styleCss]} onClick={handleClickImg} alt=''></img>
    )
}