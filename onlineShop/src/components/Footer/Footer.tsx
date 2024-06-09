import { FC } from "react";
import styles from './Footer.module.css' 
import { Link } from "react-router-dom";
import stylesApp from '../App/App.module.css'

type footerProps = {
    scrollIntoCatalog:() => void,
    scrollIntoFAQ:() => void,
    scrollIntoHeader:() => void,
}

export const Footer:FC<footerProps> = ({scrollIntoHeader,scrollIntoCatalog,scrollIntoFAQ}) => {

    const handleClickCatalog = ():void =>{
        scrollIntoCatalog();
    }

    const handleClickFAQ = ():void =>{
        scrollIntoFAQ();
    }

    const handleClickName= ():void =>{
        scrollIntoHeader();
    }
    return(
        <footer className={styles.footer}>
                <Link to='/' className={stylesApp.link} onClick={handleClickName}>
                    <h1 className={styles.name} tabIndex={4} aria-label='Goods4you'>Goods4you</h1>
                </Link>
                <nav className={styles.nav}>
                <Link onClick={handleClickCatalog} className={stylesApp.link} aria-label='Lint to Catalog' to="/">Catalog</Link>                   
                <Link onClick={handleClickFAQ} className={stylesApp.link} aria-label='Lint to FAQ' to="/">FAQ</Link>
                </nav>   
        </footer>
    )
}