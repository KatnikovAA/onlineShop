import styles from './Product.module.css'
import stylesProductInCart from './ProductInCart.module.css'
import { FC } from "react"
import { Button } from "../Button/Button"
import { objProductStub } from "../../stub"
import { Link } from 'react-router-dom'
import cartImg from  '../../image/cart.png'

export const Product:FC<objProductStub> = ({name,cost,imgUrl,id}) =>{
   
    const reduceName = ():string => {
        let shortName:string[] = name.split('')
        shortName.length = 20
        return shortName.join('') + '...'
    }

    return(
        <div className={styles.product}>
            <Link to={'/DitalProduct'}>
                <img src={imgUrl} alt="Картиника товара" className={styles.imgProduct}/>
            </Link>
            <div className={styles.productInfo}>
                <div className={styles.description}>
                    {
                        // выражение id !== 1 ? name : reduceName() ниже использовал для зашулшку для макета дальше буду завязвать логику на пропс/состояние
                    }
                    <div className="productName">{id !== 1 ? name : reduceName()}</div> 
                    <div className="productCost">{cost}$</div>
                </div>

                {
                                        
                     // выражение id !== 1 ниже использовал для зашулшку для макета дальше буду завязвать логику на пропс/состояние
                                        
                    id !== 1
                    ?
                        <Button styleCss ={'productCountButton'} text={cartImg} imgFlg={true}/>
                    :
                        
                        <div className={styles.countButtons}>
                        <Button text='-' styleCss='productCountButton'></Button>
                            <input type="text" className={styles.inputCountProduct} value={1}/>
                        <Button text='+' styleCss='productCountButton'></Button>   
             </div>
                }
                

            </div>
        </div>
    )
}