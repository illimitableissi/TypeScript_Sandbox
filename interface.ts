//interface describes structure of an object
//can only be used to describe structure of object and nothing else
//can implement interface with a class
//share functionalities with class
interface Greetable {
    name: string;
    // age: number;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor (n:string) {
        this.name = n;
    }

    greet(phrase: string){
        console.log(phrase)
    }
}

let user1: Greetable;

user1 = new Person('Issi')

user1.greet('Hi there, im')