import styles from './Home.module.css'
import { Catalog } from '../../Catalog/Catalog'
import { FC } from 'react'
import { Descript } from '../../Descript/Descript'
import { Faq } from '../../Faq/Faq'

export const Home:FC = () =>{
    
    return(
        <main className={styles.main}>
          <Descript></Descript>
          <Catalog></Catalog>
          <Faq></Faq>
        </main>
      
    )
}