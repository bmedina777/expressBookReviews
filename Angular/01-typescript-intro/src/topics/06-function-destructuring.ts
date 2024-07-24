export interface Product {
    description:string;
    price:number;

}
const phone: Product = {
    description: 'Nokia A1',
    price: 150.00
}
const tablet: Product = {
    description: 'GOOGLE Tab A',
    price: 500.00
}


const shoppingCart=[phone,tablet];
const tax = 0.15;

export interface taxCalculationsOptions{
    tax:number;
    products:Product[];
}
//Forma Original: function taxCalculation(options:taxCalculationsOptions):[number,number]{
//Desestructuracion de options en dos parametros, tax y products: function taxCalculation({tax,products}:taxCalculationsOptions):[number,number]{
export function taxCalculation(options:taxCalculationsOptions):[number,number]{

    const {tax,products} = options;
    
    let total = 0;
    products.forEach(({price})=>{
        total += price;
    });

    return [total,total*options.tax]
}
const [total,taxResult] = taxCalculation({
    products:shoppingCart,
    tax,
});
/*
const { tax:isv,products}=taxCalculation;
const {price:precio}=products;
console.log("El precio es: ",precio);
console.log('Total', total);
console.log('Tax', taxResult);*/