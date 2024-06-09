import styles from './ProductInCart.module.css'
import { Button } from '../Button/Button'
import { objProductInCartStub } from '../../stub'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import plusImg from  '../../image/plus.png'
import minusImg from  '../../image/minus.png'

type productInCartProps = {
    product:objProductInCartStub
}

export const ProductInCart:FC<productInCartProps> = ({product}) =>{
    return(
        <div className={styles.productInCart}>
            <Link className={styles.product} to={'/idProduct'} >
                <img className={styles.img} src={product.imgUrl} alt=''></img>
                <div className={styles.inform}>
                    <h2 className={styles.name} aria-label={product.name}>{product.name}</h2>
                    <div className={styles.cost}>{product.cost} $</div>
                </div>
            </Link>
            <div className={styles.countButtons}>
                <div className={styles.buttonMinus}>
                <Button text={minusImg}  styleCss='productCountButton' imgFlg={true}></Button>
                </div>
                    <input type="text" className={styles.inputCountProduct} value={1}/>  
                <div className={styles.buttonPlus}>
                    <Button text={plusImg} styleCss='productCountButton' imgFlg={true}></Button>  
                </div>
            </div>
            <div className={styles.buttonDelete}>
                <Button text='Delete' styleCss='noneBorderButton'></Button>
            </div>

        </div>
    )
}