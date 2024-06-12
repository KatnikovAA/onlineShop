import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../const'
//import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints

type apiData = {
  products: [],
  limit:number,
  skip:number,
  total:number
}

export const api = createApi({

  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes:["shop"],
  endpoints: (builder) => ({

    getProducts: builder.query<apiData, string>({
      query: (value) => `/products/search?q=${value}&limit=0&skip=0`,
    }),
    // createProducts:builder.mutation<number,string>({
    //   query:product =>({
    //     body:product,
    //     url:'/',
    //     method:'POST',
    //   })
    // })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// query: (name) => `pokemon/${name}`
export const { useGetProductsQuery } = api