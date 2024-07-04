
export const countDiscountPrice = (price, discountPercentage) => {
    let result
    
    result = price - (price * discountPercentage / 100);
    result = Number(result).toFixed(2)
    
    return result
}

