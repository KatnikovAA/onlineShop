import { FC } from 'react'
import styles from './Header.module.css' 
import { Link } from 'react-router-dom'
import stylesApp from '../App/App.module.css'
import cartImg from  '../../image/cart.png'
import { useLocation } from 'react-router-dom'

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

    const cheackLocation = ():boolean =>{
    
        return useLocation().pathname === '/' ? true : false

    }
    
    return(
        <header className={styles.header} id='header'>
                <div className={styles.main}>
                    <Link to='/' className={stylesApp.link} >
                        <h1 className={styles.logoText} aria-label='Goods4you' tabIndex={1}>Goods4you</h1> 
                    </Link>
                    <nav className={styles.menu}>
                        <Link onClick={handleClickCatalog} className={stylesApp.link} to="/" aria-label='Link to Catalog'>Catalog</Link>                   
                        <Link onClick={handleClickFAQ} className={stylesApp.link} to="/" aria-label='Link to FAQ'>FAQ</Link>
                        <div className={styles.cart}>
                            <Link to='/cart' className={stylesApp.link}>Cart</Link>
                            <div className={styles.cartCountProductImg}>
                                    <img className={styles.cartImg} src={cartImg} alt="Коризна" />
                                    <div className={styles.countInCart}>1</div>
                            </div>
                        </div>
                    </nav> 
                </div>
                <div className={cheackLocation() ? styles.border : styles.borderNone}></div> 
        </header>
    )
}