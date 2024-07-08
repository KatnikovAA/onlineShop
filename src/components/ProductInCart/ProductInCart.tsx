import styles from './ProductInCart.module.css'
import { Button } from '../Button/Button'
import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import plusImg from  '../../image/plus.png'
import minusImg from  '../../image/minus.png'
import { apiProducts , objUpdateCartProduct, apiCartsByUser } from '../types/types'
import { useGetSingleProductQuery } from '../../services/api'
import { deleteProduct,chengeQuantity} from "../../redux/features/app/appSlice";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useUpdateQuantityMutation } from "../../services/api";

type productInCartProps = {
    product:apiProducts,
}

export const ProductInCart:FC<productInCartProps> = ({product}) =>{
    const dataCart:apiCartsByUser = useSelector((state: RootState) => state.dataCartsByUser.dataCart)
    const dispatch = useDispatch()
    const idCart:number = useSelector((state: RootState) => state.idCart.id)
    const [stock,setStock] = useState<number>(0)
    const [productQuantity,setProductQuantity] = useState<number>(0)
    const {data,isLoading} = useGetSingleProductQuery(product.id) // запришиваю тут что бы получить stock даже если упадет с ошибкой возьмет дефолт значение из стайта
    const [update] = useUpdateQuantityMutation()
   
    useEffect(()=>{
        if(data){
            setStock(data.stock)
            setProductQuantity(product.quantity)
        }
    },[product,isLoading])

    const handleClickDelete = ():void =>{
        let quantity:number = productQuantity
        let cartProdcuts = creactArrayProduct()
        let modifiedCart = changeCart(false,quantity,cartProdcuts)
        update({idCart:idCart,product:modifiedCart}) 
        .then(respons =>{
            if (respons.data) {
                dispatch(chengeQuantity(respons.data))
                dispatch(deleteProduct(product.id))
            } else {
                console.error('Server dont return data');
            }
        })    
    }
    
    const changeCart = (plus:boolean,value:number,data:objUpdateCartProduct[]):objUpdateCartProduct[] =>{
        let actualQuantity:number = plus ? productQuantity + value : productQuantity - value
        let inProductFlg:boolean = false
        data.find((dataProduct)=>{ //проверяем есть ли в корзине
            if(dataProduct.id === product.id) {
                inProductFlg = true
            }
        })
        setTimeout(() =>{
            setProductQuantity(actualQuantity);
        },1000)
        
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
        let modifiedCart = changeCart(true,1,cartProdcuts)
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
        let modifiedCart = changeCart(false,1,cartProdcuts)
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
        <div className={styles.productInCart}>
            <Link className={styles.product} to={`/onlineShop/${product.id}`} >
                <img className={styles.img} src={product.thumbnail} alt=''></img>
                <div className={styles.inform}>
                    <h2 className={styles.name} aria-label={product.title}>{product.title}</h2>
                    <div className={styles.cost}>{product.price} $</div>
                </div>
            </Link>
            <div className={styles.countButtons}>
                <div className={styles.buttonMinus}>
                    <Button value={minusImg} idProduct={product.id} styleCss={product.quantity != 0 ? 'productCountButton' :'productCountButtonNone'} imgFlg={true} onClickNumber={handleMinusProduct}></Button>
                </div>
                    <input type="text" className={styles.inputCountProduct} value={productQuantity} readOnly/>  
                <div className={styles.buttonPlus}>
                    <Button value={plusImg} idProduct={product.id} styleCss={product.quantity >= stock ? 'productCountButtonNone' :'productCountButton'} imgFlg={true} onClickNumber={handlePlusProduct}></Button>  
                </div>
            </div>
            <div className={styles.buttonDelete}>
                <Button value='Delete' idProduct={product.id} styleCss='noneBorderButton' onClickNumber={handleClickDelete}></Button>
            </div>

        </div>
    )
}