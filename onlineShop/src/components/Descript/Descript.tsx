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
                <h2 className={styles.tagline} aria-label='Any products from famous brands with worldwide delivery'>Any products from famous brands with worldwide delivery</h2>
                <p className={styles.description}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
                <div onClick={handleClickButtonCatalog}> 
                    <Button styleCss='defaultButton' text='Go to shopping'></Button> 
                </div> 
                <div className={styles.backLayerLogo}>Goods4you</div>
            </article>
        </div>
    )
}