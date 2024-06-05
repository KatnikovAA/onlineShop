import styles from './Home.module.css'
import { Button } from '../../Button/Button'
import { Catalog } from '../../Catalog/Catalog'

export const Home = () =>{
    
    return(
        <main className={styles.main}>
        <article className={styles.article}>
            <div className={styles.tagline}>Any products from famous brands with worldwide delivery</div>
            <div className={styles.description}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</div>
            <a href="#catalog"> 
              <Button styleCss='articleButton' text='Go to shopping'></Button> 
            </a> 
            <div className={styles.backText}>Goods4you</div>
        </article>
        <Catalog ></Catalog>
        <section className={styles.faqBlock} id="FAQ">
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
      
    )
}