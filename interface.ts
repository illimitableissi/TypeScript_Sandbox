//interface describes structure of an object
//can only be used to describe structure of object and nothing else
//can implement interface with a class
//share functionalities with class
interface Greetable extends Named {
    // readonly name: string;
    // age: number;

    greet(phrase: string): void;
}

interface Named {
    readonly name?: string;
    // ? = means optional
    outputName?: string;
}

class Person implements Greetable {
    name?: string;
    // outputName: 'Knives'
    age = 30;

    constructor (n?:string) {
        if (n) {
            this.name = n;  
        }      
    }

    greet(phrase: string){
        if (this.name) {
        console.log(phrase)
        }
        else {
            console.log("Hi")
        }
    }
}

let user1: Greetable;

user1 = new Person();

user1.greet('Hi there, im')

interface AddFn {
    (a: number, b:number): number;
}
// type AddFn = (a: number, b:number) => number
let add: AddFn;

add = (n1: number, n2: number) => n1+n2

//minor edit