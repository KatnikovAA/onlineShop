import styles from './Descript.module.css'
import { Button } from '../Button/Button'
import { FC } from 'react'

export const Descript:FC = () =>{
    return(
        <div className={styles.descript}>
            <div className={styles.border}></div>
            <article className={styles.article}>
                <div className={styles.tagline}>Any products from famous brands with worldwide delivery</div>
                <div className={styles.description}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</div>
                <a href="#catalog"> 
                    <Button styleCss='defaultButton' text='Go to shopping'></Button> 
                </a> 
                <div className={styles.backLayerLogo}>Goods4you</div>
            </article>
        </div>
    )
}