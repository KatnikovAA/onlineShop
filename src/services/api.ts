import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../const'
import { apiData,QueryArgument,apiCartsByUser,SingleProduct,apiCarts,objUpdateCart} from '../components/types/types'

export const api = createApi({

  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes:["shop"],
  endpoints: (builder) => ({
    getProducts: builder.query<apiData, QueryArgument>({
      query({value, skip}) {
        return {
          url: `/products/search?q=${value}&limit=9&skip=${skip}`,
          method: 'GET',
          headers:{
            Authorization:'Bearer ' + `${localStorage.token}`
          }
        }
      },   
    }),
    getCartsByUser: builder.query<apiCartsByUser, number>({
      query(id) {
        return {
          url: `/carts/user/${id}`,
          method: 'GET',
          headers:{
            Authorization:'Bearer ' + `${localStorage.token}`
          }
        }
      },
    }),
    getSingleProduct: builder.query<SingleProduct, string | number >({
      query(id) {
        return {
          url: `/products/${id}`,
          method: 'GET',
          headers:{
            Authorization:'Bearer ' + `${localStorage.token}`
          },
        }
      },
    }),
    getAuthUser: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
        }),
      }),
      getCurrentAuthUser: builder.query({
        query: () => ({
          url: '/auth/me',
          method: 'GET',
          headers:{
            Authorization:'Bearer ' + `${localStorage.token}`
          },
          }),
        }),
      updateQuantity: builder.mutation<apiCarts, objUpdateCart>({
        query: (objForUpdate) => ({
          url: `https://dummyjson.com/carts/${objForUpdate.idCart}`,
          headers:{
            Authorization:'Bearer ' + `${localStorage.token}`
          },
          method: 'PATCH',
          body: {
            merge: false,
            products: objForUpdate.product
          },
          }),
        }),
    }),

    
  })


export const { useGetCurrentAuthUserQuery,useGetProductsQuery , useGetCartsByUserQuery, useGetSingleProductQuery,useGetAuthUserMutation,useUpdateQuantityMutation} = api

