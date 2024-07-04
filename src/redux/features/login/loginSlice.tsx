import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface idUser {
    id: number,
}

const initialState: idUser = {
    id: 6,
}

export const idUserSlice = createSlice({
  name: 'idUser',
  initialState,
  reducers: {
    idUser: (state, id: PayloadAction<number>) => {
      state.id = id.payload
    },
  },
})

export const { idUser } = idUserSlice.actions

export default idUserSlice.reducer