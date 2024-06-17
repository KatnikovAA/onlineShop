import styles from './ProductInCart.module.css'
import { Button } from '../Button/Button'
import { objProductInCartStub } from '../../stub'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import plusImg from  '../../image/plus.png'
import minusImg from  '../../image/minus.png'
import { apiProducts } from '../../services/api'

type productInCartProps = {
    product:apiProducts
}

export const ProductInCart:FC<productInCartProps> = ({product}) =>{
    
    const handleClickDelete = ():void =>{
        
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
                <Button value={minusImg}  styleCss='productCountButton' imgFlg={true}></Button>
                </div>
                    <input type="text" className={styles.inputCountProduct} value={product.quantity}/>  
                <div className={styles.buttonPlus}>
                    <Button value={plusImg} styleCss='productCountButton' imgFlg={true}></Button>  
                </div>
            </div>
            <div className={styles.buttonDelete}>
                <Button value='Delete' styleCss='noneBorderButton'></Button>
            </div>

        </div>
    )
}