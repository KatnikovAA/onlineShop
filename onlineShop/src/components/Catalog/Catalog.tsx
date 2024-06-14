import styles from './Catalog.module.css'
import { Button } from '../Button/Button'
import { FC } from 'react'
import { Product } from '../Product/Product'
import { useSelector,useDispatch } from 'react-redux'
import { Search } from '../Search/Search'
import { useGetProductsQuery  } from '../../services/api'
import { RootState } from "../../redux/store"
import { countLoadProducts } from '../../redux/features/catalog/catalogSlice'


type catalogProps = {
    
}


export const Catalog:FC<catalogProps> = ({}) => {

    //const[arrData,setArrData] = useState([])
    const dispatch = useDispatch()
    const loadCount:number = useSelector((state: RootState) => state.countLoadProducts.countLoad)
    //const[countLoadProducts,setCountLoadProducts] = useState(9)
    const searchValue:string = useSelector((state: RootState) => state.textSearchValue.text)
    const {isLoading,data,error} = useGetProductsQuery({value:searchValue,limit:loadCount})


    const clickButtonShowMore = () =>{
        dispatch(countLoadProducts())
    }

    return(
        <div className={styles.catalog} id="catalog">
            <h1 className={styles.name} tabIndex={2} aria-label='Catalog'>Catalog</h1>
            <Search />
            
            <div className={styles.propucts}>
                {   
                    isLoading 
                    ? 
                        error 
                        ?
                        <div>
                            {error && JSON.stringify(error)}
                        </div>
                    :
                        
                        <h3>Loading...</h3> 
                        :
                        (!data?.products || data.total > 0) 
                                ?
                                    data?.products.map((product)=>{
                                        return <Product key={product.id} product={product}></Product>
                                    })
                                :
                                    <h3 className={styles.emptyData}>
                                        Not found
                                    </h3>
                }
            </div>
            
            {        
                   
                  (!data?.products || loadCount <= data.total)

                    &&
                        <div className={styles.button}>            
                            <Button onClick={clickButtonShowMore} aria-label='Show more' value={'Show more'} styleCss={'defaultButton'}></Button>
                        </div>
            }
        </div>
    )
}