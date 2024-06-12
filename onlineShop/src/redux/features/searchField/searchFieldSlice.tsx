import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



export interface searchValue {
  text: string,
}

const initialState: searchValue = {
    text: ' ',
}

export const textForSearchSlice = createSlice({
  name: 'textSearchValue',
  initialState,
  reducers: {

    textSerach: (state, textSearchValue: PayloadAction<string>) => {
      state.text = textSearchValue.payload
    },
  },
})

export const { textSerach } = textForSearchSlice.actions

export default textForSearchSlice.reducer