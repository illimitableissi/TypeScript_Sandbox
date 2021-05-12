// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } 

//enum type
//can assign string or numbers
enum Role {ADMIN, READ_ONLY = 100, AUTHOr = "AUTHOR"};

const person = {
    name: 'Issi',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN    
};

let arrayStrings: string[];
let arrayAny: any[];
let numberArray: number[];
let thing: any

console.log(person.name)

//loop through array in object
for (const hobby of person.hobbies) {
    console.log(hobby)
}