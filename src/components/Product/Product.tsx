import styles from './Product.module.css'
import { FC } from "react"
import { Button } from "../Button/Button"
import { Link } from 'react-router-dom'
import cartImg from  '../../image/cart.png'
import plusImg from  '../../image/plus.png'
import minusImg from  '../../image/minus.png'
import { apiProducts ,apiCartsByUser ,objUpdateCartProduct} from '../types/types'
import { useState } from 'react'
import { RootState } from "../../redux/store"
import { useUpdateQuantityMutation } from "../../services/api";
import { deleteProduct,chengeQuantity} from "../../redux/features/app/appSlice";
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

    const changeCart = (plus:boolean,data:objUpdateCartProduct[]):objUpdateCartProduct[] =>{
        let actualQuantity:number = plus ? productQuantity + 1 : productQuantity - 1
        let inProductFlg:boolean = false
        data.find((dataProduct)=>{ //проверяем есть ли в корзине
            if(dataProduct.id === product.id) {
                inProductFlg = true
            }
        })
        setProductQuantity(actualQuantity);
        if(inProductFlg){ // если есть находим и прибавлем/отнимаем
                let cartProdcutsQuantity = data.map((dataProduct)=>{
                    if(dataProduct.id === product.id){
                        dataProduct.quantity =  actualQuantity
                    }
                    return dataProduct
                })
                return cartProdcutsQuantity
        }else{ // если есть нет то добаляем в корзину 
            let objProduct:objUpdateCartProduct = {
                id: product.id,
                quantity: actualQuantity
            }
            data.push(objProduct)
            return data
        }
    }

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

    const handleMinusProduct = ():void =>{
        let cartProdcuts = creactArrayProduct()
        let modifiedCart = changeCart(false,cartProdcuts)
        let quantity:number = productQuantity - 1
        update({idCart:idCart,product:modifiedCart}) 
        .then(respons =>{
            if(respons.data) {
                dispatch(chengeQuantity(respons.data))
                if(quantity === 0){
                    dispatch(deleteProduct(product.id))
                }
            } else {
                console.error('Server dont return data');
            }
        })
    }

    return( 
        <div className={styles.product}>
            <Link to={`/onlineShop/${product.id}`}>
                <img src={product.thumbnail} alt="Photo product" className={styles.imgProduct} />
            </Link>
            <div className={styles.productInfo}>
                <div className={styles.description}>
                    <div aria-label={product.title} className={styles.productName}>{!inCartFlg ? product.title : reduceName(product.title)}</div> 
                    <div className={styles.productCost}>{product.price} $</div>
                </div>

                {

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