import styles from './ProductInCart.module.css'
import { Button } from '../Button/Button'
import { objProductInCartStub } from '../../stub'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type productInCartProps = {
    product:objProductInCartStub
}

export const ProductInCart:FC<productInCartProps> = ({product}) =>{
    return(
        <div className={styles.productInCart}>
            <Link className={styles.product} to={'/DitalProduct'}>
                <img className={styles.img} src={product.imgUrl}></img>
                <div className={styles.inform}>
                    <div className={styles.name}>{product.name}</div>
                    <div className={styles.cost}>{product.cost}$</div>
                </div>
            </Link>
            <div className={styles.countButtons}>
                <Button text='-' styleCss='productCountButton'></Button>
                    <input type="text" className={styles.inputCountProduct} value={1}/>
                <Button text='+' styleCss='productCountButton'></Button>   
            </div>
            <div className={styles.buttonDelete}>
                <Button text='Delete' styleCss='noneBorderButton'></Button>
            </div>
        </div>
    )
}