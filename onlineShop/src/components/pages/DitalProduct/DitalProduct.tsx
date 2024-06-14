import { FC, useEffect, useState } from "react"
import styles from './DitalProduct.module.css' 
import { Button } from "../../Button/Button"
import starImg from  '../../../image/star.png'
import { ImgCarousel } from "../../ImgCarousel/ImgCarousel"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { useGetSingleProductQuery } from "../../../services/api"
import { useParams } from "react-router-dom"
import { pickActivImg } from '../../../redux/features/ditalProduct/ditalProductSlice'
import plusImg from  '../../../image/plus.png'
import minusImg from  '../../../image/minus.png'
import { apiCartsByUser } from "../../../services/api"


export const DitalProduct:FC = ({}) =>{
    const dataCart:apiCartsByUser = useSelector((state: RootState) => state.dataCartsByUser.dataCart)
    const activImg = useSelector((state: RootState) => state.activImg.imgUrl)
    const {idProduct} = useParams() as { idProduct: string | number };
    const {data,error,isLoading} = useGetSingleProductQuery(idProduct)
    const dispatch = useDispatch()
    const[inCartFlg,setInCartFlg] = useState<boolean>(false)
    const[productQuantity,setProductQuantity] = useState<number>(0)

    useEffect(()=>{

        if(!isLoading && data){
            dispatch(pickActivImg(data?.images[0]))
        }
    },[isLoading])

    useEffect(()=>{
        
        if(dataCart.carts.length > 0) {
            let arrProductCart = dataCart.carts[0].products
            arrProductCart.forEach((product)=>{
                if(product.id.toString() == idProduct){
                    setProductQuantity(product.quantity)
                    setInCartFlg(true)
                }
            })   
        }
    },[dataCart])
    
    const countDiscountPrice = () => {
        
        let result:number|string = 0
        if(data){
            result = data.price - (data.price * data.discountPercentage / 100);
            result = Number(result).toFixed(2)
        }
        return result
    }

    const handleRating = () =>{
        
        let stars:string[] = [starImg]

        if(!isLoading && data){
            stars = []
            for(let i = 0;i<Math.round(data?.rating);i++){
                stars.push(starImg)
            }
            
        }
        return stars
    }
    return(
        
         <div className={styles.ditalProduct}>

                {
                    isLoading
                    ? 
                        error 
                        ?
                        <div>
                            {error && JSON.stringify(error)}
                        </div>
                    :
                    <h2 className={styles.mainDitalProduct}>Loading...</h2> 
                    :
                    <div className={styles.mainDitalProduct}>
                        <h1 className={styles.productNameId} aria-label='Product' tabIndex={3}>Product {data?.id}</h1>
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
                                        data?.images.map((urlImg,index) =>{
                                            return(
                                                    <ImgCarousel srcValue={urlImg} 
                                                        key={index} 
                                                        styleCss = {urlImg === activImg ? 'activImgCarousel' : 'imgCarousel'}
                                                        
                                                    ></ImgCarousel>
                                            )
                                        })
                                    }
                                </div>
                            </section>
                            <section className={styles.descriptionProduct}>
                                <div className={styles.descriptionHead}>
                                    <div className={styles.name} aria-label={data?.title}>
                                        {data?.title}
                                    </div>
                                    <div className={styles.nameSkuid}>
                                        SKU ID 
                                        <div className={styles.skuid}>
                                            {data?.sku}    
                                        </div>   
                                    </div>
                                </div>
                                <div className={styles.nameRating}>
                                    Rating 
                                    <div className={styles.rating}>
                                        {
                                            handleRating().map((star,index)=>{
                                                return <img src={star} key={index} className={styles.starImg} alt="Рейтинг в звездах" />
                                            })
                                        }  
                                    </div>  
                                </div>
                                <div className={styles.nameBasePrice} aria-label='Base price'>
                                    Base price 
                                    <div className={styles.basePrice}>
                                        {data?.price}$  
                                    </div>  
                                </div>
                                <div className={styles.nameDiscountPercentage} aria-label='Discount percentage'>
                                    Discount percentage 
                                    <div className={styles.discountPercentage}>
                                        {data?.discountPercentage}%
                                    </div>  
                                </div>
                                <div className={styles.nameDiscountPrice} aria-label='Discount price'>
                                    Discount price
                                    <div className={styles.discountPrice}>
                                        {countDiscountPrice()}$
                                    </div> 
                                </div>
                                <div className={styles.nameStock} aria-label='Stock'>
                                    Stock 
                                    <div className={styles.stock}>
                                        {data?.stock}
                                    </div> 
                                </div>
                                <div className={styles.nameBrand} aria-label='Brand'>
                                    Brand 
                                    <div className={styles.brand}>
                                        {data?.brand}
                                    </div> 
                                </div>
                                <div className={styles.nameCategory} aria-label='Category'>
                                    Category 
                                    <div className={styles.category}>
                                        {data?.category}
                                    </div> 
                                </div>
                                <div className={styles.nameDescription} aria-label='Description'>
                                    Description
                                    <div className={styles.description}>
                                        {data?.description}
                                    </div> 
                                </div>
                                {
                                    !inCartFlg 
                                    ?
                                    <div className={styles.buttons} aria-label='Add to cart '>
                                        <Button value={"Add to cart"} styleCss={"defaultButton"}></Button>          
                                    </div>
                                    :
                                    <div className={styles.countButtons}>
                                        <Button value={minusImg} styleCss='productDetalCountButton' imgFlg={true} styleImg='productDetalCartImg'aria-label='minus product'></Button>
                                        <input type="text" className={styles.inputCountProduct} value={productQuantity}/>
                                        <Button value={plusImg} styleCss='productDetalCountButton' imgFlg={true} styleImg='productDetalCartImg' aria-label='plus product'></Button>   
                                    </div>
                                }
                            </section>
                        </div>
                    </div>
                }
            </div>
        )
    }