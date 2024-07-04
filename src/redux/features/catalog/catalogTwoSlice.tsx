import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { apiData } from '../../../components/types/types'

export interface catalogApiData {
  apiDataCatalog:apiData,
}

const initialState: catalogApiData = {
  apiDataCatalog: { products:[],limit:0,skip:0,total:0},
}


const catalogDataSlice = createSlice({
  name: 'apiData',
  initialState,
  reducers: {
    catalogData: (state,apiData: PayloadAction<apiData>) => {
      const newProducts = apiData.payload.products.filter(
        (newProduct) => !state.apiDataCatalog.products.some(
          (existingProduct) => existingProduct.id === newProduct.id
        )
      );
      state.apiDataCatalog.products = state.apiDataCatalog.products.concat(newProducts);
      state.apiDataCatalog.limit = apiData.payload.limit + state.apiDataCatalog.limit;
      state.apiDataCatalog.skip = apiData.payload.skip + state.apiDataCatalog.skip;
      state.apiDataCatalog.total = apiData.payload.total;
    },
    catalogDataDefult: (state) => {
      state.apiDataCatalog = initialState.apiDataCatalog
    },
  },
});

export const { catalogData,catalogDataDefult } = catalogDataSlice.actions

export default catalogDataSlice.reducer