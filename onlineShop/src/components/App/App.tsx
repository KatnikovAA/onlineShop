import  React,{ useState } from 'react'
import styles from './App.module.css'
import './normalize.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { DitalProduct } from '../pages/DitalProduct/DitalProduct'
import { Cart } from '../pages/Cart/Cart'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { Catalog } from '../Catalog/Catalog'
import { useNavigate } from 'react-router-dom'

function App() {
  
  const scrollIntoCatalog = ():void  =>{
    let catalog = document.getElementById('catalog')
    catalog ?
      catalog.scrollIntoView({ behavior: 'smooth', block: 'start' })
      :
      setTimeout(() =>{
        catalog = document.getElementById('catalog')
        catalog?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      },10)
  }

  const scrollIntoFAQ = ():void => {
    let FAQ = document.getElementById('FAQ')
    FAQ ?
      FAQ.scrollIntoView({ behavior: 'smooth', block: 'start' })
      :
      setTimeout(() =>{
        FAQ = document.getElementById('FAQ')
        FAQ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      },10)
  }

  return (
    <>
      <div className={styles.app}>
          <Header scrollIntoCatalog={scrollIntoCatalog} scrollIntoFAQ ={scrollIntoFAQ}/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/DitalProduct' element={<DitalProduct/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/*' element={<ErrorPage/>}></Route>
          </Routes>
          <Footer scrollIntoCatalog={scrollIntoCatalog} scrollIntoFAQ ={scrollIntoFAQ}/>

      </div>
    </>
  )
}

export default App
