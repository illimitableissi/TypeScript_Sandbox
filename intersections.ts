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

function add(a: Combinable, b:Combinable) {
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    } 
    return a + b
}

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

interface Bird {
    
    flyingSpeed: number;
}

interface Horse {
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    if('flyingSpeed' in animal) {
        console.log('Moving with speed: ' +animal.flyingSpeed)
    }
}

