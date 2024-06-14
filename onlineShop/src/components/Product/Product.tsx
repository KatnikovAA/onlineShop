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
import { useSelector } from 'react-redux'
import { apiCartsByUser } from "../../services/api"
import { useGetSingleProductQuery } from "../../services/api"
import { useEffect } from 'react'
type propsProduct = {
    product:apiProducts
}

export const Product:FC<propsProduct> = ({product}) =>{

    const[inCartFlg,setInCartFlg] = useState<boolean>(false)
    const[productQuantity,setProductQuantity] = useState<number>(0)
    const dataCart:apiCartsByUser = useSelector((state: RootState) => state.dataCartsByUser.dataCart)

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
        }
    },[dataCart])

    const reduceName = ():string => {
        let shortName:string[] = product.title.split('')
        shortName.length = 20
        return shortName.join('') + '...'
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
                    <h2 aria-label={product.title} className={styles.productName}>{!inCartFlg ? product.title : reduceName()}</h2> 
                    <div className={styles.productCost}>{product.price} $</div>
                </div>

                {
                     // выражение id !== 1 ниже использовал для зашулшку для макета дальше буду завязвать логику на пропс/состояние
                                        
                    !inCartFlg
                    ?
                        <Button styleCss ={'productCountButton'} value={cartImg} imgFlg={true} aria-label='Add to cart'/>
                    :
                        
                        <div className={styles.countButtons}>
                            <Button value={minusImg} styleCss='productCountButton' imgFlg={true} aria-label='minus product'></Button>
                            <input type="text" className={styles.inputCountProduct} value={productQuantity}/>
                            <Button value={plusImg} styleCss='productCountButton' imgFlg={true} aria-label='plus product'></Button>   
                        </div>
                }
            </div>
        </div>
    )
}