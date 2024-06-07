import { FC } from "react"
import styles from './DitalProduct.module.css' 
import { ditalPorudctStub } from "../../../stub"
import { Button } from "../../Button/Button"
import starImg from  '../../../image/star.png'

export const DitalProduct:FC = ({}) =>{

    return(
        <div className={styles.ditalProduct}>
            <div className={styles.mainDitalProduct}>
                <h1 className={styles.productNameId}>Product {ditalPorudctStub.id}</h1>
                <div className={styles.productInform}>
                    <div className={styles.imgBlock}>
                        <picture>
                            <source 
                                type="image/jpeg"
                                sizes="(max-width: 300px) 300w, 700px"
                            />
                            <img src={ditalPorudctStub.imgUrl[0]} className={styles.imgMain}></img>
                        </picture>
                        <div className={styles.listImgCarousel}>
                            {
                                ditalPorudctStub.imgUrl.map((url) =>{
                                    return(
                                        <img src={url} className={styles.imgCarousel}></img>
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
                        <div className={styles.nameRating}>
                            Rating 
                            <div className={styles.rating}>
                                <img src={starImg} className={styles.starImg} alt="1 звезда" />
                                <img src={starImg} className={styles.starImg} alt="2 звезда" />  
                                <img src={starImg} className={styles.starImg} alt="3 звезда" />  
                                <img src={starImg} className={styles.starImg} alt="4 звезда" />  
                                <img src={starImg} className={styles.starImg} alt="5 звезда" />    
                            </div>  
                        </div>
                        <div className={styles.nameBasePrice}>
                            Base price 
                            <div className={styles.basePrice}>
                                {ditalPorudctStub.basePrice} $  
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
                            <Button text={"Add to cart"} styleCss={"defaultButton"}></Button>          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}