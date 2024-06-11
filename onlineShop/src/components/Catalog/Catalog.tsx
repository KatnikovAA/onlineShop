import styles from './Catalog.module.css'
import { Button } from '../Button/Button'
import { FC } from 'react'
import { Product } from '../Product/Product'
import { productStub } from '../../stub'
import { Search } from '../Search/Search'

type catalogProps = {
    
}

export const Catalog:FC<catalogProps> = ({}) => {

    return(
        <div className={styles.catalog} id="catalog">
            <h1 className={styles.name} tabIndex={2} aria-label='Catalog'>Catalog</h1>
            <Search />
           <div className={styles.propucts}>
                {
                    productStub.map((product)=>{
                        return <Product key={product.id} name={product.name} cost={product.cost} imgUrl={product.imgUrl} id = {product.id}></Product>
                    })
                }
            </div>
            <div className={styles.button}>            
                <Button aria-label='Show more' text={'Show more'} styleCss={'defaultButton'}></Button>
            </div>
        </div>
    )
}