

export function whatsMyTipe<T>( argument:T ):T{
    return argument;
}



/*const amIString = whatsMyTipe('hola mundo');
const amINumber = whatsMyTipe(100);
const amIArray = whatsMyTipe([1,2,3,4,5]);*/
let amIString = whatsMyTipe<string>('hola mundo');
let amINumber = whatsMyTipe<number>(100);
let amIArray = whatsMyTipe<number[]>([1,2,3,4,5]);


console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));