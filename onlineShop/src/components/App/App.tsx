import  React,{ useState } from 'react'
import styles from './App.module.css'
import './normalize.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Button } from '../Button/Button'
import { Catalog } from '../Catalog/Catalog'
import { DitalProduct } from '../DitalProduct/DitalProduct'
import { Cart } from '../Cart/Cart'

function App() {
  
  return (
    <>
      <div className={styles.app}>
          <Header/>
           <main className={styles.main}>
              <article className={styles.article}>
                  <div className={styles.tagline}>Any products from famous brands with worldwide delivery</div>
                  <div className={styles.description}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</div>
                  <Button styleCss='articleButton' text='Go to shopping'></Button> 
                  <div className={styles.backText}>Goods4you</div>
              </article>
              <Catalog ></Catalog>
              <section className={styles.faqBlock}>
                <h3>FAQ</h3>
                <div className={styles.questionList}>
                  <label>
                    Question 1
                    <div>

                    </div>
                  </label>
                  <label>
                    Question 2
                    <div>

                    </div>
                  </label>
                  </div>
              </section>
            </main>
          <Footer/>
          <DitalProduct></DitalProduct>
          <Cart></Cart>
      </div>
    </>
  )
}

export default App
