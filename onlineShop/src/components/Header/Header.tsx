import { FC } from 'react'
import styles from './Header.module.css' 
import { Link } from 'react-router-dom'
import stylesApp from '../App/App.module.css'
import cartImg from  '../../image/cart.png'

type headerProps = {
    scrollIntoCatalog:() => void,
    scrollIntoFAQ:() => void,
}
export const Header:FC<headerProps> = ({scrollIntoCatalog,scrollIntoFAQ}) => {

    const handleClickCatalog = ():void =>{
        scrollIntoCatalog();
    }

    const handleClickFAQ = ():void =>{
        scrollIntoFAQ();
    }

    return(
        <header className={styles.header}>
        
                <div className={styles.logoText}>
                <Link to='/' className={stylesApp.link} >
                    {
                    // <div>Goods4you</div> ниже в данном блоке не получилось использовать h1 и блока появляется margin 
                    // и не могу отслудить от куда, пробовал отключать normalize тоже самое
                    }
                    <div>Goods4you</div> 
                </Link>
                </div>
                <nav className={styles.menu}>
                    <Link onClick={handleClickCatalog} className={stylesApp.link} to="/" >Catalog</Link>                   
                    <Link onClick={handleClickFAQ} className={stylesApp.link} to="/" >FAQ</Link>
                    <Link to='/cart' className={styles.cart}>
                        <div  className={stylesApp.link}>Cart</div>
                        <div>
                            {/* <img src={redCircleImg} alt="" /> */}
                            <img className={styles.cartImg} src={cartImg} alt="Коризна" />
                            <div className={styles.countInCart}>1</div>
                        </div>
                    </Link>
                </nav>
            
        </header>
    )
}