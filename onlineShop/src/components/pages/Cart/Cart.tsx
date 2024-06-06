import { Button } from "../../Button/Button";
import { ProductInCart } from "../../ProductInCart/ProductInCart";
import styles from './Cart.module.css' 
import { FC } from "react";
import { productInCartStub } from "../../../stub";

export const Cart:FC = ({}) =>{
    return(
        <div className={styles.cart}>
            <main className={styles.mainBlock}>
                <h1 className={styles.mainBlockName}>My Cart</h1>
                <div className={styles.informCart}>
                    <div className={styles.listProduct}>
                        {
                            productInCartStub.map((product)=>{
                                return <ProductInCart key={product.id} product={product}/>
                            })
                        }
                    </div>
                    <div className={styles.totalBlock}>
                        <div className={styles.nameTotalCount}>
                            Total count:
                            <div className={styles.totalCount}>
                                3
                            </div>
                        </div>
                        <div className={styles.nameTotalPrice}>
                            Total price:
                            <div className={styles.totalPrice}>
                                700$
                            </div>
                        </div>
                        <div className={styles.nameTotalCountWithDiscount}>
                            Total price with discount:
                            <div className={styles.totalCountWithDiscount}>
                                590$
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}