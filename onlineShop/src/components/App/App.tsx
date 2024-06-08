import styles from './App.module.css'
import './normalize.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { DitalProduct } from '../pages/DitalProduct/DitalProduct'
import { Cart } from '../pages/Cart/Cart'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { FC } from 'react'

const App:FC = () => {
  
  const scrollIntoCatalog = ():void  =>{ //фукнция для скрола до элмента найденего по getElementById, можно было попробовать через useRef, но решил не нагроможать 1 задание useRef
    let catalog: HTMLElement | null = document.getElementById('catalog')
    catalog ?
      catalog.scrollIntoView({ behavior: 'smooth', block: 'start' })
      :
      setTimeout(() =>{
        catalog = document.getElementById('catalog') // жду 10 ms пока страницка с главным экраном отрендирится и опять получаю id куда скролить
        catalog?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 10)
  }

  const scrollIntoFAQ = ():void => {
    let FAQ: HTMLElement | null = document.getElementById('FAQ')
    FAQ ?
      FAQ.scrollIntoView({ behavior: 'smooth', block: 'start' })
      :
      setTimeout(() =>{
        FAQ = document.getElementById('FAQ')
        FAQ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 10)
  }

  const scrollIntoHeader = ():void => {
    let header: HTMLElement | null = document.getElementById('header')
    header ?
    header.scrollIntoView({ behavior: 'smooth', block: 'start' })
      :
      setTimeout(() =>{
        header = document.getElementById('FAQ')
        header?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 10)
  }

  return (
    <>
      <div className={styles.app}>
          <Header scrollIntoCatalog={scrollIntoCatalog} scrollIntoFAQ ={scrollIntoFAQ}/>
          <Routes>
            <Route path='/' element={<Home scrollIntoCatalog={scrollIntoCatalog}/>}></Route>
            <Route path='/idProduct' element={<DitalProduct/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/*' element={<ErrorPage/>}></Route>
          </Routes>
          <Footer scrollIntoCatalog={scrollIntoCatalog} 
          scrollIntoFAQ ={scrollIntoFAQ}
          scrollIntoHeader = {scrollIntoHeader}
          />
      </div>
    </>
  )
}

export default App
