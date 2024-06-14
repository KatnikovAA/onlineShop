import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { apiData } from '../../../services/api'

export interface interfaceApiData {
  apiDataCatalog:apiData,
}

const initialState: interfaceApiData = {
  apiDataCatalog: { products:[],limit:0,skip:0,total:0},
}

export const apiDataCatalogSlice = createSlice({
  name: 'apiDataCatalog',
  initialState,
  reducers: {
    countLoadProducts: (state,apiData: PayloadAction<apiData>) => {
      state.apiDataCatalog = apiData.payload
    },
  },
})


export const { countLoadProducts} = apiDataCatalogSlice.actions

export default apiDataCatalogSlice.reducer