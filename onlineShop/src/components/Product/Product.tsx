import styles from './Product.module.css'
import { FC } from "react"
import { Button } from "../Button/Button"
import { objProductStub } from "../../stub"


export const Product:FC<objProductStub> = ({name,cost,imgUrl}) =>{
   
    return(
        <div className={styles.product}>
            <img src={imgUrl} alt="Картиника товара" className={styles.imgProduct}/>
            <div className={styles.productInfo}>
                <div className={styles.description}>
                    <div className="productName">{name}</div>
                    <div className="productCost">{cost}$</div>
                </div>
                <Button text={"fdsf"} styleCss ={'productButton'}></Button>
            </div>
        </div>
    )
}