import  React,{ useState } from 'react'
import styles from './App.module.css'
import './normalize.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

function App() {
  

  return (
    <>
      <div className={styles.app}>
          <Header/>
           <div className={styles.main}>main
            </div>
          <Footer/>
      </div>
    </>
  )
}

export default App
