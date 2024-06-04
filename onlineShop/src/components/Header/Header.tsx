import { FC } from 'react'
import styles from './Header.module.css' 

export const Header:FC = ({}) => {
    return(
        <header className={styles.header}>
                <div className={styles.logoText}>
                    <h1>Goods4you</h1>
                </div>
                <nav className={styles.menu}>
                    <div>Catalog</div>
                    <div>FAQ</div>
                    <div>Card</div>
                </nav>
            
        </header>
    )
}