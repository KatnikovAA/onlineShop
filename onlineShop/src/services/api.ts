import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../const'

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
export type apiData = {
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
  skip:number,
}
export const api = createApi({

  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes:["shop"],
  endpoints: (builder) => ({
    // изначально переменную ${skip} прокидывал в limit и грузил по + 9, 
    // но по заданию надо выводит и старый данные и при клик грузить новые но только со skip без загрузку старый уже загруженный данных 
    // сделал через состояние  вывод и старых и новых данные в Каталог
    getProducts: builder.query<apiData, QueryArgument>({
      query: ({value, skip}) => `/products/search?q=${value}&limit=9&skip=${skip}`, 
    }),
    getCartsByUser: builder.query<apiCartsByUser, string>({
      query: () => `/carts/user/6`,
    }),
    getSingleProduct: builder.query<SingleProduct, string | number >({
      query: (id) => `/products/${id}`,
    }),
  }),
})

export const { useGetProductsQuery , useGetCartsByUserQuery, useGetSingleProductQuery } = api