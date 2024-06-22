import styles from './App.module.css'
import './normalize.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { DitalProduct } from '../pages/DitalProduct/DitalProduct'
import { Cart } from '../pages/Cart/Cart'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { FC, useEffect } from 'react'
import { useGetCartsByUserQuery , useGetCurrentAuthUserQuery} from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { dataCartUser } from '../../redux/features/app/appSlice'
import { Login } from '../pages/Login/Login'
import { useNavigate } from 'react-router-dom'
import { useGetAuthUserMutation } from '../../services/api'
import { RootState } from "../../redux/store"
import { useLocation } from 'react-router-dom'
import { getIdCart } from '../../redux/features/app/appSliceTwo'
import { idUser } from "../../redux/features/login/loginSlice";

const App:FC = () => {

  
  const idUserFromState:number = useSelector((state: RootState) => state.idUser.id)
  const location = useLocation()
  const navigate = useNavigate()
  const {data,isLoading} = useGetCartsByUserQuery(idUserFromState)
  const dispatch = useDispatch()
  const [_] = useGetAuthUserMutation()
  const { data: authData, error , isLoading: authIsLoading} = useGetCurrentAuthUserQuery(undefined); // проверяем срок жизни токена

useEffect(() => {
    if (!localStorage.token || (!authIsLoading && error)) {
      navigate('/auth'); 
  }
}, [location.pathname, navigate, error]);

 

  useEffect(()=>{
    if(data){
      dispatch(dataCartUser(data))
      dispatch(getIdCart(data.carts[0].id))
    }

    if(idUserFromState === 0 && authData){
      dispatch(idUser(authData.id)) //
      
    }
  },[isLoading,authIsLoading])

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
      {
        isLoading  || authIsLoading 
        ?
        <h3>Loading...</h3> 
        :
      <div className={styles.app}>
      <Header scrollIntoCatalog={scrollIntoCatalog} scrollIntoFAQ ={scrollIntoFAQ}/>
      <Routes>
        <Route path='/' element={<Home scrollIntoCatalog={scrollIntoCatalog}/>}></Route>
        <Route path='/auth' element={<Login />}></Route>
        <Route path='/:idProduct' element={<DitalProduct authIsLoading = {authIsLoading}/>}></Route>
        <Route path='/cart' element={<Cart authIsLoading = {authIsLoading}/>}></Route>
        <Route path='/*' element={<ErrorPage/>}></Route>
      </Routes>
      <Footer scrollIntoCatalog={scrollIntoCatalog} 
        scrollIntoFAQ ={scrollIntoFAQ}
        scrollIntoHeader = {scrollIntoHeader}
      />
  </div>
      }

    </>
  )
}

export default App
