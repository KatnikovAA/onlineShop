import { FC } from "react"
import styles from './DitalProduct.module.css' 
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { ditalPorudctStub } from "../../stub"
import { Button } from "../Button/Button"

export const DitalProduct:FC = ({}) =>{
    return(
        <div className={styles.ditalProduct}>
            <Header></Header>
            <main className={styles.mainDitalProduct}>
                <h1 className={styles.productNameId}>Product {ditalPorudctStub.id}</h1>
                <div className={styles.productInform}>
                    <div className={styles.imgBlock}>
                        <img src={ditalPorudctStub.imgUrl[0]} className={styles.imgMain}></img>
                        <div className={styles.listImgCarousel}>
                            {
                                ditalPorudctStub.imgUrl.map((url) =>{
                                    return(
                                        <img src={url} className={styles.imgCarousel}>

                                        </img>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.descriptionProduct}>
                        <div className={styles.descriptionHead}>
                            <div className={styles.name}>
                                {ditalPorudctStub.name}
                            </div>
                            <div className={styles.nameSkuid}>
                                SKU ID 
                                <div className={styles.skuid}>
                                    {ditalPorudctStub.skuid}    
                                </div>   
                            </div>
                        </div>
                        <div className={styles.nameRatinga}>
                            Ratinga 
                            <div className={styles.ratinga}>
                                    {ditalPorudctStub.ratinga}    
                            </div>  
                        </div>
                        <div className={styles.nameBasePrice}>
                            Base Price 
                            <div className={styles.basePrice}>
                                {ditalPorudctStub.basePrice}$  
                            </div>  
                        </div>
                        <div className={styles.nameDiscountPercentage}>
                            Discount percentage 
                            <div className={styles.discountPercentage}>
                                {ditalPorudctStub.discountPercentage}%
                            </div>  
                        </div>
                        <div className={styles.nameDiscountPrice}>
                            Discount price
                            <div className={styles.discountPrice}>
                                {ditalPorudctStub.discountPrice}$
                            </div> 
                        </div>
                        <div className={styles.nameStock}>
                            Stock 
                            <div className={styles.stock}>
                                {ditalPorudctStub.stock}
                            </div> 
                        </div>
                        <div className={styles.nameBrand}>
                            Brand 
                            <div className={styles.brand}>
                                {ditalPorudctStub.brand}
                            </div> 
                        </div>
                        <div className={styles.nameCategory}>
                            Category 
                            <div className={styles.category}>
                                {ditalPorudctStub.category}
                            </div> 
                        </div>
                        <div className={styles.nameDescription}>
                            Description
                            <div className={styles.description}>
                                {ditalPorudctStub.description}
                            </div> 
                        </div>
                        <div className={styles.ditalProductButton}>
                            <Button text={"Add to cart"} styleCss={"articleButton"}></Button>          
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}