import styles from './Product.module.css'
import { FC } from "react"
import { Button } from "../Button/Button"
import { objProductStub } from "../../stub"
import { Link } from 'react-router-dom'
import cartImg from  '../../image/cart.png'
import plusImg from  '../../image/plus.png'
import minusImg from  '../../image/Vector 2.png'

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
                    <div className={styles.productName}>{id !== 1 ? name : reduceName()}</div> 
                    <div className={styles.productCost}>{cost} $</div>
                </div>

                {
                                        
                     // выражение id !== 1 ниже использовал для зашулшку для макета дальше буду завязвать логику на пропс/состояние
                                        
                    id !== 1
                    ?
                        <Button styleCss ={'productCountButton'} text={cartImg} imgFlg={true}/>
                    :
                        
                        <div className={styles.countButtons}>
                        <Button text={minusImg} styleCss='productCountButton' imgFlg={true}></Button>
                            <input type="text" className={styles.inputCountProduct} value={1}/>
                        <Button text={plusImg} styleCss='productCountButton' imgFlg={true}></Button>   
             </div>
                }
                

            </div>
        </div>
    )
}