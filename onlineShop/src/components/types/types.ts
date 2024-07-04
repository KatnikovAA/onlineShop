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
      discountedPrice:number,
      id:number,
      products:apiProducts[],
      total:number,
      totalProducts:number,
      totalQuantity:number,
      userId:number, 
  }
  
  export type apiProducts = {
    discountedTotal:number,
    discountedPrice:number,
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
  
  export type QueryArgument = {
    value:string,
    skip:number,
  }
  export type objUpdateCart = {
    idCart:number,
    product:objUpdateCartProduct[]
  }
  export type objUpdateCartProduct = {
    id: number
    quantity: number,
  }