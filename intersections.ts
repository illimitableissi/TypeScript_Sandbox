//intersection types can be used to combine different types

type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Issi',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic

//Function Overload
function add(a: number, b:number): number;
function add(a:string, b:string): string;
function add(a: number, b:string): string;
function add(a: string, b:number): string;
function add(a: Combinable, b:Combinable) {
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    } 
    return a + b
}

const result = add('Max', 'Schwarz');
result.split(' ')

type UnkownEmployee = Employee | Admin;

function printEmployeeInformations(emp: UnkownEmployee){
    console.log('Name: ' + emp.name);
    //in is a javascript built in function to check within
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges)        
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate)        
    }
}

printEmployeeInformations(e1)

class Car {
    drive() {
        console.log('Driving..')
    }
}

class Truck {
    drive() {
        console.log('Driving truck..')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck
const v1 = new Car ();
const v2 = new Truck ();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    // if('loadCargo' in vehicle) {
    //     vehicle.loadCargo(1000)
    // }
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1)
useVehicle(v2)

//Discrimated Unions

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
   switch(animal.type) {
       case 'bird':
           speed = animal.flyingSpeed;
           break
        case 'horse':
            speed = animal.runningSpeed
       }
       console.log('Moving at speed: ' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})

//Type Casting

// const userInputElement = <HTMLInputElement>document.getElementById('')
const userInputElement = document.getElementById('')! as HTMLInputElement;

if (userInputElement){
    (userInputElement as HTMLInputElement).value = 'Hi there'
}

const paragraph = document.querySelector('p');

interface ErrorContainer { // { email: 'Not a valid email, userName: 'Must start with a character}
    //every property must be string and value must also be a string
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    userName: 'Must start with a valid character!'
};

//Optional Chaining 

const fetchedUserData = {
    id: 'ul',
    name: 'Issi',
    job: {title: 'CEO', desciption: 'My own company'}
};

// console.log(fetchedUserData.job && fetchedUserData.job.title)
console.log(fetchedUserData?.job?.title);

const userInput = null;

//Nullish Coalescing = ?? (null or undefined)
const storedData = userInput ?? 'DEFAULT'

