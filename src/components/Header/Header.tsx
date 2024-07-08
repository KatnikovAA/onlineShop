import { FC } from 'react'
import styles from './Header.module.css' 
import { Link } from 'react-router-dom'
import stylesApp from '../App/App.module.css'
import cartImg from  '../../image/cart.png'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { apiCartsByUser } from '../types/types'
import { cheackLocation } from '../../function/cheackLocation/cheackLocation'

type headerProps = {
    scrollIntoCatalog?:() => void,
    scrollIntoFAQ?:() => void,
}

export const Header:FC<headerProps> = ({scrollIntoCatalog,scrollIntoFAQ}) => {

    const location = useLocation()
    const dataCart:apiCartsByUser = useSelector((state: RootState) => state.dataCartsByUser.dataCart)    

    const handleClickCatalog = ():void =>{
        scrollIntoCatalog && scrollIntoCatalog();
    }

    const handleClickFAQ = ():void =>{
        scrollIntoFAQ && scrollIntoFAQ();
    }

    // const cheackLocation = ():boolean =>{
    //     return location.pathname === '/' ? true : false
    // }
    
    return(
        <header className={styles.header} id='header'>
                <div className={styles.main}>
                    <Link to='/onlineShop/' className={location.pathname !=='/onlineShop/auth' ? stylesApp.link : stylesApp.linkNone} >
                        <h1 className={styles.logoText} aria-label='Goods4you' tabIndex={1}>Goods4you</h1> 
                    </Link>
                    <nav className={location.pathname !=='/onlineShop/auth' ? styles.menu : styles.menuNone}>
                        <Link onClick={handleClickCatalog} className={stylesApp.link} to="/onlineShop/" aria-label='Link to Catalog'>Catalog</Link>                   
                        <Link onClick={handleClickFAQ} className={stylesApp.link} to="/onlineShop/" aria-label='Link to FAQ'>FAQ</Link>
                        <div className={styles.cart}>
                            <Link to='/onlineShop/cart' className={stylesApp.link}>Cart</Link>
                                <Link to='/onlineShop/cart' className={styles.cartCountProductImg}>
                                    <img className={styles.cartImg} src={cartImg} alt="Cart" title='Cart'/>
                                    {
                                        dataCart.carts[0]?.totalQuantity
                                        ?
                                        <div className={styles.countInCart}>{dataCart?.carts[0].totalQuantity}</div>
                                        :
                                        <></>
                                    }
                                </Link>    
                        </div>
                    </nav> 
                </div>
                <div className={cheackLocation(location.pathname) ? styles.border : styles.borderNone}></div> 
        </header>
    )
}