import { FC, useState } from "react"
import styles from './DitalProduct.module.css' 
import { ditalPorudctStub } from "../../../stub"
import { Button } from "../../Button/Button"
import starImg from  '../../../image/star.png'
import { ImgCarousel } from "../../ImgCarousel/ImgCarousel"


export const DitalProduct:FC = ({}) =>{

    const [activImg,setActivImg] = useState(ditalPorudctStub.imgUrl[0])

    const pickMainImg = (url:string):void => {
        setActivImg(url)  
    }

    return(

         <div className={styles.ditalProduct}>
            <div className={styles.mainDitalProduct}>
                <h1 className={styles.productNameId} aria-label='Product' tabIndex={3}>Product {ditalPorudctStub.id}</h1>
                <div className={styles.productInform}>
                    <section className={styles.imgBlock}>
                        <picture>
                            <source 
                                type="image/jpeg"
                                sizes="(max-width: 300px) 300w, 700px"
                            />
                            <img alt='' src={activImg} className={styles.imgMain}></img>
                        </picture>
                        <div className={styles.listImgCarousel}>
                            {
                                ditalPorudctStub.imgUrl.map((urlImg,index) =>{
                                    return(
                                            <ImgCarousel srcValue={urlImg} 
                                                key={index} 
                                                styleCss = {urlImg === activImg ? 'activImgCarousel' : 'imgCarousel'}
                                                pickMainImg = {pickMainImg}   
                                            ></ImgCarousel>
                                    )
                                })
                            }
                        </div>
                    </section>
                    <section className={styles.descriptionProduct}>
                        <div className={styles.descriptionHead}>
                            <div className={styles.name} aria-label={ditalPorudctStub.name}>
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
                        <div className={styles.nameBasePrice} aria-label='Base price'>
                            Base price 
                            <div className={styles.basePrice}>
                                {ditalPorudctStub.basePrice}$  
                            </div>  
                        </div>
                        <div className={styles.nameDiscountPercentage} aria-label='Discount percentage'>
                            Discount percentage 
                            <div className={styles.discountPercentage}>
                                {ditalPorudctStub.discountPercentage}%
                            </div>  
                        </div>
                        <div className={styles.nameDiscountPrice} aria-label='Discount price'>
                            Discount price
                            <div className={styles.discountPrice}>
                                {ditalPorudctStub.discountPrice}$
                            </div> 
                        </div>
                        <div className={styles.nameStock} aria-label='Stock'>
                            Stock 
                            <div className={styles.stock}>
                                {ditalPorudctStub.stock}
                            </div> 
                        </div>
                        <div className={styles.nameBrand} aria-label='Brand'>
                            Brand 
                            <div className={styles.brand}>
                                {ditalPorudctStub.brand}
                            </div> 
                        </div>
                        <div className={styles.nameCategory} aria-label='Category'>
                            Category 
                            <div className={styles.category}>
                                {ditalPorudctStub.category}
                            </div> 
                        </div>
                        <div className={styles.nameDescription} aria-label='Description'>
                            Description
                            <div className={styles.description}>
                                {ditalPorudctStub.description}
                            </div> 
                        </div>
                        <div className={styles.ditalProductButton} aria-label='Add to cart '>
                            <Button text={"Add to cart"} styleCss={"defaultButton"}></Button>          
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}