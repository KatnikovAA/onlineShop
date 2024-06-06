import { FC } from 'react'
import styles from './Header.module.css' 
import { Link,useNavigate } from 'react-router-dom'
import stylesApp from '../App/App.module.css'

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
                        <h1>Goods4you</h1>
                    </Link>
                </div>
                <nav className={styles.menu}>
                    <Link onClick={handleClickCatalog} className={stylesApp.link} to="/" >Catalog</Link>                   
                    <Link onClick={handleClickFAQ} className={stylesApp.link} to="/" >FAQ</Link>
                    <Link to='/cart' className={stylesApp.link}>Card</Link>
                </nav>
        </header>
    )
}