import { ProductInCart } from "../../ProductInCart/ProductInCart";
import styles from './Cart.module.css' 
import { FC } from "react";
import { productInCartStub } from "../../../stub";

export const Cart:FC = ({}) =>{
    return(
        <div className={styles.cart}>
            <div className={styles.mainBlock}>
                <h1 className={styles.name} aria-label='My cart' tabIndex={2}>My cart</h1>
                <div className={styles.informCart}>
                    <div className={styles.listProduct}>
                        {
                            productInCartStub.map((product)=>{
                                return <ProductInCart key={product.id} product={product}/>
                            })
                        }
                    </div>
                    <section className={styles.totalBlock}>
                        <div className={styles.totalCount}>
                            <h2 className={styles.nameTotalCount} aria-label='Total count:3'>
                                Total count:
                            </h2>
                            <div className={styles.valueTotalCount}>
                                3
                            </div>
                        </div>
                        <div className={styles.totalPrice}>
                            <h2 className={styles.nameTotalPrice} aria-label='Total price:700$'>
                                Total price:
                            </h2>
                            <div className={styles.valueTotalPrice}>
                                700$
                            </div>
                        </div>
                        <div className={styles.totalCountWithDiscount}>
                            <h2 className={styles.nameTotalCountWithDiscount} aria-label='Total price with discount:590$'>
                                Total price with discount:
                            </h2>
                            <div className={styles.valueTotalCountWithDiscount}>
                                590$
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}