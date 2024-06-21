import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { apiCartsByUser ,apiCarts} from '../../../services/api'


export interface cartsByUserState {
    dataCart: apiCartsByUser,
}
export interface idProduct {
  id: number,
}
const initialState: cartsByUserState = {
    dataCart: {
        carts:[],
        limit:0,
        skip:0,
        total:0
    },
}

export const dataCartUserSlice = createSlice({
  name: 'dataCartsByUser',
  initialState,
  reducers: {

    dataCartUser: (state, data: PayloadAction<apiCartsByUser>) => {
      state.dataCart = data.payload
    },
    chengeQuantity: (state, data: PayloadAction<apiCarts>) => { 
      state.dataCart.carts[0] = data.payload
    },
    deleteProduct: (state, id: PayloadAction<number>) => {

      state.dataCart.carts[0].products = state.dataCart.carts[0].products.filter(product => product.id !== id.payload);
      // if(data.payload.products[0].quantity !== 0 ){
      //   state.dataCart.carts[0].discountedTotal = state.dataCart.carts[0].discountedTotal - (data.payload.products[0].discountedPrice/data.payload.products[0].quantity) * data.payload.products[0].quantity 
      //   state.dataCart.carts[0].totalQuantity = state.dataCart.carts[0].totalQuantity - data.payload.products[0].quantity;
      //   state.dataCart.carts[0].total = state.dataCart.carts[0].total - (data.payload.products[0].price * data.payload.products[0].quantity)
      // }

    },
    // plusQuantity: (state, data: PayloadAction<apiCarts>) => {
    //   const productIndex = state.dataCart.carts[0].products.findIndex(
    //     product => product.id === data.payload.products[0].id
    //   );
    //   const productPrice = data.payload.products[0].price;
    //   const productDiscount = data.payload.products[0].discountPercentage;
    //   state.dataCart.carts[0].totalQuantity = state.dataCart.carts[0].totalQuantity + 1;
    //   state.dataCart.carts[0].total = state.dataCart.carts[0].total + data.payload.products[0].price
    //   state.dataCart.carts[0].discountedTotal = state.dataCart.carts[0].discountedTotal + (productPrice - (productPrice * productDiscount / 100))

    //   if (productIndex !== -1) {
    //       // Продукт уже есть, заменяем его
    //       state.dataCart.carts[0].products[productIndex] = data.payload.products[0];
    //   } else {
    //       // Продукта нет, добавляем его
    //       state.dataCart.carts[0].products.push(data.payload.products[0]);
    //   }
    // },
    // minusQuantity: (state, data: PayloadAction<apiCarts>) => {
    //   const productIndex = state.dataCart.carts[0].products.findIndex(
    //     product => product.id === data.payload.products[0].id
    //   );
    //     const productPrice = data.payload.products[0].price;
    //     const productDiscount = data.payload.products[0].discountPercentage;
    //     state.dataCart.carts[0].totalQuantity = state.dataCart.carts[0].totalQuantity - 1;
    //     state.dataCart.carts[0].total = state.dataCart.carts[0].total - data.payload.products[0].price
    //     state.dataCart.carts[0].discountedTotal = state.dataCart.carts[0].discountedTotal - (productPrice - (productPrice * productDiscount / 100))
  
      

    //   if (productIndex !== -1) {
    //       // Продукт уже есть, заменяем его
    //       state.dataCart.carts[0].products[productIndex] = data.payload.products[0];
    //   } else {
    //       // Продукта нет, добавляем его
    //       state.dataCart.carts[0].products.push(data.payload.products[0]);
    //   }
    // },
    // minusProductQuantity: (state, id: PayloadAction<number>) => {
    //   const productIndex = state.dataCart.carts[0].products.findIndex(product => product.id === id.payload);
    //   if (productIndex !== -1 && state.dataCart.carts[0].products[productIndex].quantity > 0) {
    //     const productPrice = state.dataCart.carts[0].products[productIndex].price;
    //     const productDiscount = state.dataCart.carts[0].products[productIndex].discountPercentage;
    //     const discountedPrice = productPrice - (productPrice * productDiscount / 100);
    //     state.dataCart.carts[0].products[productIndex].quantity = state.dataCart.carts[0].products[productIndex].quantity - 1
    //     state.dataCart.carts[0].totalQuantity = state.dataCart.carts[0].totalQuantity - 1
    //     state.dataCart.carts[0].discountedTotal = parseFloat((state.dataCart.carts[0].discountedTotal - discountedPrice).toFixed(10));
    //     state.dataCart.carts[0].total = state.dataCart.carts[0].total - state.dataCart.carts[0].products[productIndex].price
    //   }
    // },
    // addProduct: (state, newPordcut: PayloadAction<apiProducts>) => {
      //state.dataCart.carts[0].products = state.dataCart.carts[0].products.push(newPordcut.payload)
      // const productIndex = state.dataCart.carts[0].products.findIndex(product => product.id === id.payload);
      // if (productIndex !== -1 && state.dataCart.carts[0].products[productIndex].quantity > 0) {
      //   const productPrice = state.dataCart.carts[0].products[productIndex].price;
      //   const productDiscount = state.dataCart.carts[0].products[productIndex].discountPercentage;
      //   const discountedPrice = productPrice - (productPrice * productDiscount / 100);
      //   state.dataCart.carts[0].products = state.dataCart.carts[0].products.push(newPordcut.payload)
      //   state.dataCart.carts[0].products[productIndex].quantity = state.dataCart.carts[0].products[productIndex].quantity - 1
      //   state.dataCart.carts[0].totalQuantity = state.dataCart.carts[0].totalQuantity - 1
      //   state.dataCart.carts[0].discountedTotal = parseFloat((state.dataCart.carts[0].discountedTotal - discountedPrice).toFixed(10));
      //   state.dataCart.carts[0].total = state.dataCart.carts[0].total - state.dataCart.carts[0].products[productIndex].price
      // }
    // },
      
      // const productIndex = state.dataCart.carts[0].products.findIndex(product => product.id === id.payload);
      // const countPrice = state.dataCart.carts[0].products[productIndex].quantity * state.dataCart.carts[0].products[productIndex].price
      // if (productIndex !== -1) {
      //   state.dataCart.carts[0].totalQuantity = state.dataCart.carts[0].totalQuantity - state.dataCart.carts[0].products[productIndex].quantity
      //   state.dataCart.carts[0].discountedTotal = parseFloat((state.dataCart.carts[0].discountedTotal - (countPrice - (countPrice * state.dataCart.carts[0].products[productIndex].discountPercentage/100))).toFixed(2))        
      //   state.dataCart.carts[0].total = state.dataCart.carts[0].total - countPrice
      //   state.dataCart.carts[0].products = state.dataCart.carts[0].products.filter(product => product.id !== id.payload);
      // }
    
  },
})

export const { dataCartUser,deleteProduct,chengeQuantity } = dataCartUserSlice.actions

export default dataCartUserSlice.reducer