import styles from './Catalog.module.css'
import { Button } from '../Button/Button'
import { FC, useEffect, useState } from 'react'
import { Product } from '../Product/Product'
import { useSelector,useDispatch } from 'react-redux'
import { Search } from '../Search/Search'
import { useGetProductsQuery  } from '../../services/api'
import { RootState } from "../../redux/store"
import { countLoadProducts } from '../../redux/features/catalog/catalogSlice'
import { apiData } from '../types/types'
import { catalogData } from '../../redux/features/catalog/catalogTwoSlice'


type catalogProps = {
    
}


export const Catalog:FC<catalogProps> = ({}) => {

    const dispatch = useDispatch()
    const [loadMoreFlg,setLoadMoreFlg] = useState<boolean>(false)
    const loadCount:number = useSelector((state: RootState) => state.countLoadProducts.countLoad)
    const searchValue:string = useSelector((state: RootState) => state.textSearchValue.text)
    const {isLoading,data,error} = useGetProductsQuery({value:searchValue,skip:loadCount})
    const apiDataCatalog:apiData = useSelector((state: RootState) => state.apiData.apiDataCatalog)
    
    const clickButtonShowMore = () =>{
        setLoadMoreFlg(true)
        dispatch(countLoadProducts())
        
    }

    useEffect(()=>{
        if(!isLoading && data){
            dispatch(catalogData(data)) 
            setLoadMoreFlg(false)
        }

    },[data])

    return(
        <div className={styles.catalog} id="catalog">
            <h1 className={styles.name} tabIndex={2} aria-label='Catalog'>Catalog</h1>
            <Search />
            {
                error 
                    &&
                <h3>
                    {error && "Error Data Pls Reload"}
                </h3>
            }
            <div className={styles.propucts}>
                {   
                    isLoading 
                    ? 
                        <h3>Loading...</h3> 
                    :
                    
                        (!data?.products || data.total > 0) 
                        
                                ?
                                apiDataCatalog?.products.map((product)=>{
                                        return <Product key={product.id} product={product}></Product>
                                    })
                                :
                                    <h3 className={styles.emptyData}>
                                        Not found
                                    </h3>
                }
            </div>
            
            {
                                loadMoreFlg  && <div className={styles.loader}></div>
            }
            
            {        
            
                (apiDataCatalog.products.length < apiDataCatalog.total)

                &&

                
     
                
                <div className={styles.button}>            
                   <Button onClickEvent={clickButtonShowMore} aria-label='Show more' value={'Show more'} styleCss={'defaultButton'}></Button>
               </div>
            }
        </div>
    )
}