import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { apiCartsByUser , apiCarts} from '../../../components/types/types'


export interface cartsByUserState {
    dataCart: apiCartsByUser,
}
export interface idProduct {
  id: number,
}
const initialState: cartsByUserState = {
    dataCart: {
        carts:[],
        limit:0,
        skip:0,
        total:0
    },
}

export const dataCartUserSlice = createSlice({
  name: 'dataCartsByUser',
  initialState,
  reducers: {

    dataCartUser: (state, data: PayloadAction<apiCartsByUser>) => {
      state.dataCart = data.payload
    },
    chengeQuantity: (state, data: PayloadAction<apiCarts>) => { 
      state.dataCart.carts[0] = data.payload
    },
    deleteProduct: (state, id: PayloadAction<number>) => {

      state.dataCart.carts[0].products = state.dataCart.carts[0].products.filter(product => product.id !== id.payload);

    },
    
  },
})

export const { dataCartUser,deleteProduct,chengeQuantity } = dataCartUserSlice.actions

export default dataCartUserSlice.reducer