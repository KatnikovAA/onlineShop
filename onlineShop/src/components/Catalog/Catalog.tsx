import styles from './Catalog.module.css'
import { Button } from '../Button/Button'
import { FC } from 'react'
import { Product } from '../Product/Product'

import { Search } from '../Search/Search'
import { useGetProductsQuery } from '../../services/api'
import { useSelector } from 'react-redux'
import { RootState } from "../../redux/store"
import { useState } from 'react'

type catalogProps = {
    
}

type apiProduct = {
    id:number,
    title:string,
    price:number,
    images:string[],
}

export const Catalog:FC<catalogProps> = ({}) => {

    //const[arrData,setArrData] = useState([])
    const[countLoadProducts,setCountLoadProducts] = useState(9)

    const searchValue = useSelector((state: RootState) => state.textSearchValue.text)

    const {isLoading,data,error} = useGetProductsQuery(searchValue)

    

    const clickButtonShowMore = () =>{
        setCountLoadProducts(prev => prev + 9)
    }

    return(
        <div className={styles.catalog} id="catalog">
            <h1 className={styles.name} tabIndex={2} aria-label='Catalog'>Catalog</h1>
            <Search />
            
            <div className={styles.propucts}>
                {   
                    isLoading 
                        ? 
                            <h3>Loading...</h3> 
                        :
                            data 
                                ?
                                    data.products.slice(0,countLoadProducts).map((product:apiProduct)=>{
                                        return <Product key={product.id} name={product.title} cost={product.price} imgUrl={product.images[0]}></Product>
                                    })
                                :
                                    <div className={styles.emptyData}>

                                    </div>
                }
            </div>
            {        
                   
                   (!data?.products || data.products.length == 0 || countLoadProducts >= data.products.length)

                    ?
                        <h3>Not found</h3>
                    :
                        <div className={styles.button}>            
                            <Button onClick={clickButtonShowMore} aria-label='Show more' value={'Show more'} styleCss={'defaultButton'}></Button>
                        </div>
            }
        </div>
    )
}