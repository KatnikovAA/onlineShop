import styles from './Descript.module.css'
import { Button } from '../Button/Button'
import { FC } from 'react'

type descriptProps = {
    scrollIntoCatalog:() => void,
}

export const Descript:FC<descriptProps> = ({scrollIntoCatalog}) =>{

    const handleClickButtonCatalog = ():void =>{
        scrollIntoCatalog();
    }

    return(
        <div className={styles.descript}>
            <article className={styles.article}>
                <div className={styles.tagline}>Any products from famous brands with worldwide delivery</div>
                <div className={styles.description}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</div>
                <div onClick={handleClickButtonCatalog}> 
                    <Button styleCss='defaultButton' text='Go to shopping'></Button> 
                </div> 
                <div className={styles.backLayerLogo}>Goods4you</div>
            </article>
        </div>
    )
}