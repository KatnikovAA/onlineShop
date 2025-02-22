import { FC, useEffect, useState } from "react"
import styles from './DitalProduct.module.css' 
import { Button } from "../../Button/Button"
import starImg from  '../../../image/star.png'
import { ImgCarousel } from "../../ImgCarousel/ImgCarousel"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { useGetSingleProductQuery} from "../../../services/api"
import { objUpdateCartProduct , apiProducts ,apiCartsByUser} from "../../types/types"
import { useParams } from "react-router-dom"
import { pickActivImg } from '../../../redux/features/ditalProduct/ditalProductSlice'
import plusImg from  '../../../image/plus.png'
import minusImg from  '../../../image/minus.png'
import { useUpdateQuantityMutation } from "../../../services/api";
import { deleteProduct,chengeQuantity} from "../../../redux/features/app/appSlice";
import { countDiscountPrice } from "../../../function/countDiscountPrice/countDiscountPrice"

type propsDitalProduct = {
    authIsLoading:boolean
}

export const DitalProduct:FC<propsDitalProduct> = ({authIsLoading}) =>{
    const idCart:number = useSelector((state: RootState) => state.idCart.id)
    const dataCart:apiCartsByUser = useSelector((state: RootState) => state.dataCartsByUser.dataCart)
    const activImg = useSelector((state: RootState) => state.activImg.imgUrl)
    const {idProduct} = useParams() as { idProduct: string | number };
    const {data,error,isLoading} = useGetSingleProductQuery(idProduct)
    const dispatch = useDispatch()
    const[inCartFlg,setInCartFlg] = useState<boolean>(false)
    const[productQuantity,setProductQuantity] = useState<number>(0)
    const [update] = useUpdateQuantityMutation()
    const [stock,setStock] = useState<number>(0)

    useEffect(()=>{

        if(!isLoading && data){
            dispatch(pickActivImg(data?.images[0]))
            setStock(data.stock)
        }

    },[isLoading])

    delete localStorage.token // проверка на остусвтие token

    useEffect(() => {
        if (dataCart.carts.length > 0) {
            let arrProductCart:apiProducts[] = dataCart.carts[0].products;
            let productFound:boolean = false;
            let productQuantity:number = 0;
            
            !inCartFlg //проверять только если false а при кликах на кнопки не будет
            arrProductCart.forEach((product) => {
              if (product.id.toString() === idProduct) {
                productQuantity = product.quantity;
                productFound = true;
              }
            });
        
            setProductQuantity(productQuantity);
            setInCartFlg(productFound);
          }

      }, [dataCart,idProduct]);
    


    const creactArrayProduct = ():objUpdateCartProduct[]  => {
        let cartProdcuts:objUpdateCartProduct[] = []
        let arrData = dataCart.carts[0].products  
        arrData.forEach((product) => {
            let objProduct = {
                id: product.id,
                quantity: product.quantity
            }
            cartProdcuts.push(objProduct)
        })
        return cartProdcuts
    } 

    const changeCart = (plus:boolean,data:objUpdateCartProduct[]):objUpdateCartProduct[] =>{
        let actualQuantity:number = plus ? productQuantity + 1 : productQuantity - 1
        let inProductFlg:boolean = false
        data.find((product)=>{ //проверяем есть ли в корзине
            if(product.id === Number(idProduct)) {
                inProductFlg = true
            }
        })
        setProductQuantity(actualQuantity);
        if(inProductFlg){ // если есть находим и прибавлем/отнимаем
                let cartProdcutsQuantity = data.map((prodcut)=>{
                    if(prodcut.id === Number(idProduct)){
                        prodcut.quantity =  actualQuantity
                    }
                    return prodcut
                })
                return cartProdcutsQuantity
        }else{ // если есть нет то добаляем в корзину 
            let objProduct:objUpdateCartProduct = {
                id: Number(idProduct),
                quantity: actualQuantity
            }
            data.push(objProduct)
            return data
        }
    }

    const handlePlusProduct = ():void => {
        let cartProdcuts = creactArrayProduct()
        let modifiedCart = changeCart(true,cartProdcuts)
        update({idCart:idCart,product:modifiedCart}) 
        .then(respons =>{
            if (respons.data) {
                dispatch(chengeQuantity(respons.data))
            } else {
                console.error('Server dont return data');
            }
        })
    }

    const handleAddToCart = ():void =>{
        let cartProdcuts = creactArrayProduct()
        let modifiedCart = changeCart(true,cartProdcuts)
        update({idCart:idCart,product:modifiedCart}) 
        .then(respons =>{
            if (respons.data) {
                dispatch(chengeQuantity(respons.data))
                setInCartFlg(true)
            } else {
                console.error('Server dont return data');
            }
        })
    }

    const handleMinusProduct = ():void =>{
        let cartProdcuts = creactArrayProduct()
        let modifiedCart = changeCart(false,cartProdcuts)
        let quantity:number = productQuantity - 1
        update({idCart:idCart,product:modifiedCart}) 
        .then(respons =>{
            if(respons.data) {
                dispatch(chengeQuantity(respons.data))
                if(quantity === 0){
                    dispatch(deleteProduct(Number(idProduct)))
                    setInCartFlg(false)
                }
            } else {
                console.error('Server dont return data');
            }
        })
    }

    const handleRating = ():string[]  =>{
        
        let stars:string[] = [starImg]

        if(!isLoading && data){
            stars = []
            for(let i = 0; i < Math.round(data?.rating); i++){
                stars.push(starImg)
            }  
        }
        return stars
    }

    return(
        
         <div className={styles.ditalProduct}>

                {   
                    isLoading  || authIsLoading 
                    ?
                    <h3 className={styles.mainDitalProduct}>Loading...</h3> 
                    :
                    error                 
                    ? 
                        <h3>
                            {error && "Error Data Pls Reload"}
                        </h3>
                    :
                    <article  className={styles.mainDitalProduct}>
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
                                <ul className={styles.listImgCarousel}>
                                    {
                                        data?.images.map((urlImg, index) => (
                                            <li key={index}>
                                                <ImgCarousel 
                                                    srcValue={urlImg} 
                                                    styleCss={urlImg === activImg ? 'activImgCarousel' : 'imgCarousel'}
                                                />
                                            </li>
                                        ))
                                    }
                                </ul>
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
                                                return <img src={star} key={index} className={styles.starImg} alt="Rating product" />
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
                                        {data ? countDiscountPrice(data.price,data.discountPercentage) : 0}$
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
                                        <Button onClickNumber={handleAddToCart} idProduct={Number(idProduct)} value={"Add to cart"} styleCss={"defaultButton"}></Button>          
                                    </div>
                                    :
                                    <div className={styles.countButtons}>
                                        <Button onClickNumber={handleMinusProduct} idProduct={Number(idProduct)} value={minusImg} styleCss='productDetalCountButton' imgFlg={true} styleImg='productDetalCartImg'aria-label='minus product'></Button>
                                        <input type="text" className={styles.inputCountProduct} value={productQuantity} readOnly/>
                                        <Button onClickNumber={handlePlusProduct} idProduct={Number(idProduct)} value={plusImg} styleCss={productQuantity < stock ? 'productDetalCountButton' : 'productDetalCountButtonNone'} imgFlg={true} styleImg='productDetalCartImg' aria-label='plus product'></Button>   
                                    </div>
                                }
                            </section>
                        </div>
                    </article>
                }
            </div>
        )
    }