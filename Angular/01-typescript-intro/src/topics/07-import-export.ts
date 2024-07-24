import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [{
    description:'Google Pixel 6 pro',
    price: 7000
},
{
    description:'Google Pixel 7 pro',
    price: 8000 
}];

//tax =0.15
const[total,tax]= taxCalculation({
    products: shoppingCart,
    tax:0.15
});
console.log("Total: ",total);
console.log("Tax: ",tax);