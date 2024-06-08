import { ProductInCart } from "../../ProductInCart/ProductInCart";
import styles from './Cart.module.css' 
import { FC } from "react";
import { productInCartStub } from "../../../stub";

export const Cart:FC = ({}) =>{
    return(
        <div className={styles.cart}>
            <div className={styles.mainBlock}>
                <h1 className={styles.name}>My cart</h1>
                <div className={styles.informCart}>
                    <div className={styles.listProduct}>
                        {
                            productInCartStub.map((product)=>{
                                return <ProductInCart key={product.id} product={product}/>
                            })
                        }
                    </div>
                    <div className={styles.totalBlock}>
                        <div className={styles.totalCount}>
                            <div className={styles.nameTotalCount}>
                                Total count:
                            </div>
                            <div className={styles.valueTotalCount}>
                                3
                            </div>
                        </div>
                        <div className={styles.totalPrice}>
                            <div className={styles.nameTotalPrice}>
                                Total price:
                            </div>
                            <div className={styles.valueTotalPrice}>
                                700$
                            </div>
                        </div>
                        <div className={styles.totalCountWithDiscount}>
                            <div className={styles.nameTotalCountWithDiscount}>
                                Total price with discount:
                            </div>
                            <div className={styles.valueTotalCountWithDiscount}>
                                590$
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}