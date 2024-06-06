import styles from './Catalog.module.css'
import { Button } from '../Button/Button'
import { FC } from 'react'
import { Product } from '../Product/Product'
import { productStub } from '../../stub'

type catalogProps = {
    
}

export const Catalog:FC<catalogProps> = ({}) => {

    return(
        <div className={styles.catalog} id="catalog">
            <h1 className={styles.name}>Catalog</h1>
            <div className={styles.searchBlock}>
                <input type="text" placeholder='Search by title' className={styles.seacrhText}/>
                <Button text='Search' styleCss='defaultButton'></Button>
            </div>
           <div className={styles.propucts}>
                {
                    productStub.map((product)=>{
                        return <Product key={product.id} name={product.name} cost={product.cost} imgUrl={product.imgUrl} id = {product.id}></Product>
                    })
                }
            </div>
            <div className={styles.button}>            
                <Button text={'Show more'} styleCss={'defaultButton'}></Button>
            </div>
        </div>
    )
}