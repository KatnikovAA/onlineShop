import styles from './Product.module.css'
import { FC } from "react"
import { Button } from "../Button/Button"
import { objProductStub } from "../../stub"
import { Link } from 'react-router-dom'

export const Product:FC<objProductStub> = ({name,cost,imgUrl}) =>{
   
    return(
        <div className={styles.product}>
            <Link to={'/DitalProduct'}>
                <img src={imgUrl} alt="Картиника товара" className={styles.imgProduct}/>
            </Link>
            <div className={styles.productInfo}>
                <div className={styles.description}>
                    <div className="productName">{name}</div>
                    <div className="productCost">{cost}$</div>
                </div>
                <Button text={"Buy"} styleCss ={'productCountButton'}></Button>
            </div>
        </div>
    )
}