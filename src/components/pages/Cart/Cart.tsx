import { ProductInCart } from "../../ProductInCart/ProductInCart";
import styles from './Cart.module.css' 
import { FC } from "react";
import { useGetCartsByUserQuery } from "../../../services/api";
import { RootState } from '../../../redux/store'
import { useSelector } from 'react-redux'
import { apiCartsByUser } from "../../types/types";

export type productValueType = {
    id:number,
    stock?:number,
}

type propsCart = {
    authIsLoading:boolean
}

export const Cart:FC<propsCart> = ({authIsLoading}) =>{

    const idCart:number = useSelector((state: RootState) => state.idCart.id)
    const { error, isLoading } = useGetCartsByUserQuery(idCart) // использую тут useGetCartsByUserQuery т.к по 1 заданию надо и error, isLoading учитывать
    // и и получать data корзины из Стора а не из запроса 
    const data:apiCartsByUser = useSelector((state: RootState) => state.dataCartsByUser.dataCart)

    return(
        <div className={styles.cart}>
            <div className={styles.mainBlock}>
                <h1 className={styles.name} aria-label='My cart' tabIndex={2}>My cart</h1>
                <div className={styles.informCart}>

                    <div className={styles.listProduct}>
                        {   
                            isLoading  || authIsLoading 
                            ?
                            <h3>Loading...</h3> 
                            :
                            error                 
                            ? 
                                <h3>
                                    {error && "Error Data Pls Reload"}
                                </h3>
                            :
                                data && data.carts && data.carts.length > 0 && data.carts[0].products.length > 0 
                            
                                ?
                                
                                data.carts[0].products.map((product)=>{
                                    return <ProductInCart key={product.id} product={product}/>
                                })
                                :
                                <h3>Nothing in the cart yet </h3>
                        }
                    </div>
                    <section className={styles.totalBlock}>
                        <div className={styles.totalCount}>
                            <h2 className={styles.nameTotalCount} aria-label='Total count:3'>
                                Total count:
                            </h2>
                            <div className={styles.valueTotalCount}>
                                {data?.carts[0]?.totalQuantity ? data?.carts[0]?.totalQuantity : 0}
                            </div>
                        </div>
                        <div className={styles.totalPrice}>
                            <h2 className={styles.nameTotalPrice} aria-label='Total price:700$'>
                                Total price:
                            </h2>
                            <div className={styles.valueTotalPrice}>
                            
                            {data?.carts[0]?.total && data.carts[0].products.length > 0 ? Number(data?.carts[0]?.total).toFixed(2) : 0}$
                            </div>
                        </div>
                        <div className={styles.totalCountWithDiscount}>
                            <h2 className={styles.nameTotalCountWithDiscount} aria-label='Total price with discount:590$'>
                                Total price with discount:
                            </h2>
                            <div className={styles.valueTotalCountWithDiscount}>
                            {data?.carts[0]?.discountedTotal && data.carts[0].products.length > 0 ? Number(data?.carts[0]?.discountedTotal).toFixed(2) : 0}$
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}