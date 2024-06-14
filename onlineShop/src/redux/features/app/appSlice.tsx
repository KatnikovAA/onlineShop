import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ditalPorudctStub } from '../../../stub'
import { apiCartsByUser } from '../../../services/api'

export interface cartsByUserState {
    dataCart: apiCartsByUser,
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
  },
})

export const { dataCartUser } = dataCartUserSlice.actions

export default dataCartUserSlice.reducer