import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface idCart {
    id: number,
}

const initialState: idCart = {
    id: 0,
}

export const userCartIdSlice = createSlice({
  name: 'idCart',
  initialState,
  reducers: {
    idCartUser: (state, id: PayloadAction<number>) => {
      state.id = id.payload
    },
  },
})

export const { idCartUser } = userCartIdSlice.actions

export default userCartIdSlice.reducer