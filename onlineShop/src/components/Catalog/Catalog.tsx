import styles from './Catalog.module.css'
import { Button } from '../Button/Button'
import { FC, useEffect } from 'react'
import { Product } from '../Product/Product'
import { useSelector,useDispatch } from 'react-redux'
import { Search } from '../Search/Search'
import { useGetProductsQuery  } from '../../services/api'
import { RootState } from "../../redux/store"
import { countLoadProducts } from '../../redux/features/catalog/catalogSlice'
import { apiData } from '../../services/api'
import { catalogData } from '../../redux/features/catalog/catalogTwoSlice'


type catalogProps = {
    
}


export const Catalog:FC<catalogProps> = ({}) => {

    const dispatch = useDispatch()
    const loadCount:number = useSelector((state: RootState) => state.countLoadProducts.countLoad)
    const searchValue:string = useSelector((state: RootState) => state.textSearchValue.text)
    const {isLoading,data,error} = useGetProductsQuery({value:searchValue,skip:loadCount})
    const apiDataCatalog:apiData = useSelector((state: RootState) => state.apiData.apiDataCatalog)
    
    const clickButtonShowMore = () =>{
        dispatch(countLoadProducts())
    }

    useEffect(()=>{
        {
            // добавил хранения состояние для useGetProductsQuery т.к не понял как выводить данные из апи когда со параметром СКИП + старые данные
            // старый данный сохрнаяю в состояние и при каждом запросе к ним добавляю новыйе , если поиск по слову не изменился
        }
        if(!isLoading && data){
            dispatch(catalogData(data)) 
        }

    },[data])

    return(
        <div className={styles.catalog} id="catalog">
            <h1 className={styles.name} tabIndex={2} aria-label='Catalog'>Catalog</h1>
            <Search />
            {
                error 
                    &&
                <div className={styles.propucts}>
                    {error && JSON.stringify(error)}
                </div>
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
                (apiDataCatalog.products.length < apiDataCatalog.total)

                &&

                   <div className={styles.button}>            
                   <Button onClick={clickButtonShowMore} aria-label='Show more' value={'Show more'} styleCss={'defaultButton'}></Button>
               </div>
            }
        </div>
    )
}