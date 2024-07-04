import {countDiscountPrice} from './countDiscountPrice';

describe('countDiscountPrice function', () => {

  test('countDiscountPrice 100 by 5% to equal 95.00', () => {
    expect(Number(countDiscountPrice(100, 5))).toBeCloseTo(95, 2);
  });

  test('countDiscountPrice 100 by 0% to equal 100.00', () => {
    expect(Number(countDiscountPrice(100, 0))).toBeCloseTo(100, 2);
  });

  
  test('countDiscountPrice 100 by 100% to equal 0.00', () => {
    expect(Number(countDiscountPrice(100, 100))).toBeCloseTo(0, 2);
  });

 
  test('countDiscountPrice 123.45 by 12.34% to equal 108.17', () => {
    expect(Number(countDiscountPrice(123.45, 12.34))).toBeCloseTo(108.23, 1);
  });
});


