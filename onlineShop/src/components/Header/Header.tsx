import { FC } from 'react'
import styles from './Header.module.css' 
import { Link } from 'react-router-dom'
import stylesApp from '../App/App.module.css'
import cartImg from  '../../image/cart.png'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { apiCartsByUser } from '../../services/api'
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
                    <Link to='/' className={location.pathname !=='/auth' ? stylesApp.link : stylesApp.linkNone} >
                        <h1 className={styles.logoText} aria-label='Goods4you' tabIndex={1}>Goods4you</h1> 
                    </Link>
                    <nav className={location.pathname !=='/auth' ? styles.menu : styles.menuNone}>
                        <Link onClick={handleClickCatalog} className={stylesApp.link} to="/" aria-label='Link to Catalog'>Catalog</Link>                   
                        <Link onClick={handleClickFAQ} className={stylesApp.link} to="/" aria-label='Link to FAQ'>FAQ</Link>
                        <div className={styles.cart}>
                            <Link to='/cart' className={stylesApp.link}>Cart</Link>
                                <div className={styles.cartCountProductImg}>
                                    <img className={styles.cartImg} src={cartImg} alt="Коризна" />
                                    {
                                        dataCart.carts[0]?.totalQuantity
                                        ?
                                        <div className={styles.countInCart}>{dataCart?.carts[0].totalQuantity}</div>
                                        :
                                        <></>
                                    }
                                </div>    
                        </div>
                    </nav> 
                </div>
                <div className={cheackLocation(location.pathname) ? styles.border : styles.borderNone}></div> 
        </header>
    )
}