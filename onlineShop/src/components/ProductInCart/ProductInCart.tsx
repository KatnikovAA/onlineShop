import styles from './ProductInCart.module.css'
import { Button } from '../Button/Button'
import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import plusImg from  '../../image/plus.png'
import minusImg from  '../../image/minus.png'
import { apiProducts } from '../../services/api'
import { useGetSingleProductQuery } from '../../services/api'
import { deleteProduct,plusQuantity,minusQuantity} from "../../redux/features/app/appSlice";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useUpdateQuantityMutation } from "../../services/api";

type productInCartProps = {
    product:apiProducts,
}

export const ProductInCart:FC<productInCartProps> = ({product}) =>{
    const dispatch = useDispatch()
    const idCart:number = useSelector((state: RootState) => state.idCart.id)
    const [stock,setStock] = useState<number>(0)
    const [productQuantity,setProductQuantity] = useState<number>(0)
    const {data,isLoading} = useGetSingleProductQuery(product.id) // запришиваю тут что бы получить stock
    const [update] = useUpdateQuantityMutation()
   
    useEffect(()=>{
        if(data){
            setStock(data.stock)
            setProductQuantity(product.quantity)
        }
    },[product,isLoading])

    const handleClickDelete = ():void =>{
        
        let quantity:number = productQuantity
        setProductQuantity(quantity);
        update({idProduct:Number(product.id),idCart:idCart,quantity:quantity}) 
        .then(respons =>{
            if (respons.data) {
                dispatch(deleteProduct(respons.data))
            } else {
                console.error('Server dont return data');
            }
        })    
    }
    
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
                    console.log(respons.data)
                    dispatch(deleteProduct(respons.data))
                }
            } else {
                console.error('Server dont return data');
            }
        })
    }

    return(
        <div className={styles.productInCart}>
            <Link className={styles.product} to={`/${product.id}`} >
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