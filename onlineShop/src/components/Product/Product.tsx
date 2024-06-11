import styles from './Product.module.css'
import { FC } from "react"
import { Button } from "../Button/Button"
import { objProductStub } from "../../stub"
import { Link } from 'react-router-dom'
import cartImg from  '../../image/cart.png'
import plusImg from  '../../image/plus.png'
import minusImg from  '../../image/minus.png'

export const Product:FC<objProductStub> = ({name,cost,imgUrl,id}) =>{
   
    const reduceName = ():string => {
        let shortName:string[] = name.split('')
        shortName.length = 20
        return shortName.join('') + '...'
    }

    return(
        <div className={styles.product}>
            <Link to={'/idProduct'}>
                <img src={imgUrl} alt="Картиника товара" className={styles.imgProduct} />
            </Link>
            <div className={styles.productInfo}>
                <div className={styles.description}>
                    {
                        // выражение id !== 1 ? name : reduceName() ниже использовал для зашулшку для макета дальше буду завязвать логику на пропс/состояние
                    }
                    <h2 aria-label={name} className={styles.productName}>{id !== 1 ? name : reduceName()}</h2> 
                    <div className={styles.productCost}>{cost} $</div>
                </div>

                {
                     // выражение id !== 1 ниже использовал для зашулшку для макета дальше буду завязвать логику на пропс/состояние
                                        
                    id !== 1
                    ?
                        <Button styleCss ={'productCountButton'} value={cartImg} imgFlg={true} aria-label='Add to cart'/>
                    :
                        
                        <div className={styles.countButtons}>
                        <Button value={minusImg} styleCss='productCountButton' imgFlg={true} aria-label='minus product'></Button>
                            <input type="text" className={styles.inputCountProduct} value={1}/>
                        <Button value={plusImg} styleCss='productCountButton' imgFlg={true} aria-label='plus product'></Button>   
                        </div>
                }
            </div>
        </div>
    )
}