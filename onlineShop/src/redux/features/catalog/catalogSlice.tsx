import { createSlice } from '@reduxjs/toolkit'


export interface countLoads {
  countLoad: number,
}

const initialState: countLoads = {
    countLoad: 0,
}

export const countLoadProductsSlice = createSlice({
  name: 'countLoadProducts',
  initialState,
  reducers: {
    countLoadProducts: (state) => {
      state.countLoad += 9
    },
    countLoadProductsDefult: (state) => {
        state.countLoad = 0
      },
  },
})




export const { countLoadProducts,countLoadProductsDefult } = countLoadProductsSlice.actions

export default countLoadProductsSlice.reducer