import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface idCart{
    id: number,
}

const initialState: idCart = {
    id: 0,
}

export const idCartSlice = createSlice({
  name: 'idCart',
  initialState,
  reducers: {
    getIdCart: (state, id: PayloadAction<number>) => {
      state.id = id.payload
    },
  },
})

export const { getIdCart } = idCartSlice.actions

export default idCartSlice.reducer