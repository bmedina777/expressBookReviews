export class Person{
    //public name?:string;
    //public address?:string;
    /* Forma #1 para asignacion de clases
    public name:string;
    private address:string;
    constructor(name:string,address:string){
        this.name= name;
        this.address=address;
    }*/
    constructor(
        public firstName:string,
        public lastName:string,
        private address:string
     )
    {}
}
/*Primer método para exportar clase extendida de la clase Person:
export class Hero extends Person
{



    constructor(
        public alterEgo:string,
        public age:number,
        realName:string
    ){
        super(realName, 'New York');
    }
}*/
export class Hero 
{
    //public person: Person;


    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person: Person
    ){
        //this.person = new Person(realName);
    }
}


const tony = new Person('Tony','Stark','New York')
const ironman = new Hero('DeuxMedina',28,'Brayan Medina',tony);
console.log(ironman);