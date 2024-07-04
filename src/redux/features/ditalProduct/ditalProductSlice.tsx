import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ditalPorudctStub } from '../../../stub'


export interface activImgProuctState {
  imgUrl: string,
}

const initialState: activImgProuctState = {
  imgUrl: ditalPorudctStub.imgUrl[0],
}

export const activImgProuctSlice = createSlice({
  name: 'activImg',
  initialState,
  reducers: {

    pickActivImg: (state, pickingImg: PayloadAction<string>) => {
      state.imgUrl = pickingImg.payload
    },
  },
})

export const { pickActivImg } = activImgProuctSlice.actions

export default activImgProuctSlice.reducer