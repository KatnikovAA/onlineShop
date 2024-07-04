import styles from './Home.module.css'
import { Catalog } from '../../Catalog/Catalog'
import { FC } from 'react'
import { Descript } from '../../Descript/Descript'
import { Faq } from '../../Faq/Faq'

type homeProps = {
  scrollIntoCatalog:() => void,
}

export const Home:FC<homeProps> = ({scrollIntoCatalog}) =>{
    
    return(
        <main className={styles.main}>
          <Descript scrollIntoCatalog={scrollIntoCatalog}></Descript>
          <Catalog></Catalog>
          <Faq></Faq>
        </main>
      
    )
}