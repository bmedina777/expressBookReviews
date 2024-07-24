function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor{
        newPropierty = "New Propierty";
        hello="override";
    }
}




@classDecorator
class SuperClass{


    public myPropierty:string = 'Abc123';

    print()
    {
        console.log("Hola Mundo");
    }
}



console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);