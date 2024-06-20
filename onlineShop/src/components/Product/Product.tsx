import styles from './Product.module.css'
import { FC } from "react"
import { Button } from "../Button/Button"
import { Link } from 'react-router-dom'
import cartImg from  '../../image/cart.png'
import plusImg from  '../../image/plus.png'
import minusImg from  '../../image/minus.png'
import { apiProducts } from '../../services/api'
import { useState } from 'react'
import { RootState } from "../../redux/store"
import { apiCartsByUser } from "../../services/api"
import { useUpdateQuantityMutation } from "../../services/api";
import { deleteProduct,plusQuantity,minusQuantity} from "../../redux/features/app/appSlice";
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useGetSingleProductQuery } from '../../services/api'
import { reduceName } from '../../function/reduceName/reduceName'

type propsProduct = {
    product:apiProducts
}

export const Product:FC<propsProduct> = ({product}) =>{
    const {data} = useGetSingleProductQuery(product.id) // запришиваю тут что бы получить stock
    const idCart:number = useSelector((state: RootState) => state.idCart.id)
    const [update] = useUpdateQuantityMutation()
    const[inCartFlg,setInCartFlg] = useState<boolean>(false)
    const[productQuantity,setProductQuantity] = useState<number>(0)
    const dataCart:apiCartsByUser = useSelector((state: RootState) => state.dataCartsByUser.dataCart)
    const dispatch = useDispatch()
    const [stock,setStock] = useState<number>(0)
    
    useEffect(()=>{
        
        if(dataCart.carts.length > 0) {
            let current = product.id
            let arrProductCart = dataCart.carts[0].products
            arrProductCart.forEach((product)=>{
                if(product.id === current){
                    setProductQuantity(product.quantity)
                    setInCartFlg(true)
                }
            }) 
            data && setStock(data.stock)  
        }
    },[dataCart])

    // const reduceName = ():string => {
    //     let shortName:string[] = product.title.split('')
    //     shortName.length = 20
    //     return shortName.join('') + '...'
    // }
    
    const handlePlusProduct = ():void => {
        let quantity:number = productQuantity + 1
        setProductQuantity(quantity);
        update({idProduct:Number(product.id),idCart:idCart,quantity:quantity}) 
        .then(respons =>{
            if (respons.data) {
                dispatch(plusQuantity(respons.data))
                console.log(respons.data)
                console.log(product)
            } else {
                console.error('Server dont return data');
            }
        }) 
    }
    
    const handleMinusProduct = ():void =>{
        let quantity:number = productQuantity - 1
        setProductQuantity(quantity);
        update({idProduct:Number(product.id),idCart:idCart,quantity:quantity}) 
        .then(respons =>{
            if (respons.data) {
                dispatch(minusQuantity(respons.data))
                if(quantity === 0){
                    dispatch(deleteProduct(respons.data))
                    setInCartFlg(false)
                }
            } else {
                console.error('Server dont return data');
            }
        })
    }

    const handleAddToCart = ():void =>{
        let quantity:number = productQuantity + 1
        setProductQuantity(quantity);
        update({idProduct:Number(product.id),idCart:idCart,quantity:quantity}) 
        .then(respons =>{
            if (respons.data) {
                dispatch(plusQuantity(respons.data))
                setInCartFlg(true)
            } else {
                console.error('Server dont return data');
            }
        })
    }

    return( 
        <div className={styles.product}>
            <Link to={`/${product.id}`}>
                <img src={product.thumbnail} alt="Картиника товара" className={styles.imgProduct} />
            </Link>
            <div className={styles.productInfo}>
                <div className={styles.description}>
                    {
                        // выражение id !== 1 ? name : reduceName() ниже использовал для зашулшку для макета дальше буду завязвать логику на пропс/состояние
                    }
                    <h2 aria-label={product.title} className={styles.productName}>{!inCartFlg ? product.title : reduceName(product.title)}</h2> 
                    <div className={styles.productCost}>{product.price} $</div>
                </div>

                {
                     // выражение id !== 1 ниже использовал для зашулшку для макета дальше буду завязвать логику на пропс/состояние
                                        
                    !inCartFlg
                    ?
                        <Button onClickNumber={handleAddToCart} idProduct={product.id} styleCss ={'productCountButton'} value={cartImg} imgFlg={true} aria-label='Add to cart'/>
                    :
                        
                        <div className={styles.countButtons}>
                            <Button onClickNumber={handleMinusProduct} idProduct={product.id} value={minusImg} styleCss='productCountButton' imgFlg={true} aria-label='minus product'></Button>
                            <input type="text" className={styles.inputCountProduct} value={productQuantity} readOnly/>
                            <Button onClickNumber={handlePlusProduct} idProduct={product.id} value={plusImg} styleCss={productQuantity >= stock ? 'productCountButtonNone' :'productCountButton'} imgFlg={true} aria-label='plus product'></Button>   
                        </div>
                }
            </div>
        </div>
    )
}