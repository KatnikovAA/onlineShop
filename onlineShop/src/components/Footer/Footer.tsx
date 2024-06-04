import React, { FC } from "react";
import styles from './Footer.module.css' 

type Props = {

    
}

export const Footer:FC<Props> = ({}) => {
    return(
        <footer className={styles.footer}>
                <h3>Goods4you</h3>
                <nav className={styles.nav}>
                    <div>Catalog</div>
                    <div>FAQ</div>
                </nav>   
        </footer>
    )
}