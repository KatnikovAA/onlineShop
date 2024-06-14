import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../const'
//import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints

export type SingleProduct = {

  shippingInformation:string,
  availabilityStatus:string,
  minimumOrderQuantity:number,
  images:string[],
  thumbnail:string,
  title:string,
  warrantyInformation:string,
  returnPolicy:string,
  price:number,
  id:number | string,
  rating:number,
  basePrice:number,
  discountPercentage:number,
  discountPrice:number,
  stock:number,
  brand:string,
  category:string,
  description:string,
  sku:string,
  dimensions:string,
  weight:number,
  tags:[],
  meta:{},
  reviews:[]

}
type apiData = {
  products: apiProducts[],
  limit:number,
  skip:number,
  total:number
}
export type apiCartsByUser = {
  carts:apiCarts[],
  total:number,
  skip:number,
  limit:number,
}

export type apiCarts = {
    discountedTotal:number,
    id:number,
    products:apiProducts[],
    total:number,
    totalProducts:number,
    totalQuantity:number,
    userId:number, 
}

export type apiProducts = {
  discountPercentage:number,
  id:number,
  price:number,
  quantity:number,
  thumbnail:string,
  title:string,
  total:number,
  titotaltle:number,
  images:string[],
}

type QueryArgument = {
  value:string,
  limit:number,
}
export const api = createApi({

  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes:["shop"],
  endpoints: (builder) => ({

    getProducts: builder.query<apiData, QueryArgument>({
      query: ({value, limit}) => `/products/search?q=${value}&limit=${limit}&skip=0`,
    }),
    getCartsByUser: builder.query<apiCartsByUser, string>({
      query: () => `/carts/user/6`,
    }),
    getSingleProduct: builder.query<SingleProduct, string | number >({
      query: (id) => `/products/${id}`,
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
export const { useGetProductsQuery , useGetCartsByUserQuery, useGetSingleProductQuery } = api