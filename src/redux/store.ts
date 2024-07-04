import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import activImgProuctReducer from './features/ditalProduct/ditalProductSlice'
import textForSearchReducer from './features/searchField/searchFieldSlice'
import countLoadProductsReducer from './features/catalog/catalogSlice'
import dataCartUserReducer from './features/app/appSlice'
import  catalogDataReducer  from './features/catalog/catalogTwoSlice'
import  idUserReducer  from './features/login/loginSlice'
import { api } from '../services/api'
import  idCartReducer  from './features/app/appSliceTwo'
export const store = configureStore({
  reducer: {
    [api.reducerPath]:api.reducer,
    idCart:idCartReducer,
    idUser:idUserReducer,
    activImg:activImgProuctReducer,
    textSearchValue:textForSearchReducer,
    countLoadProducts:countLoadProductsReducer,
    dataCartsByUser:dataCartUserReducer,
    apiData:catalogDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch