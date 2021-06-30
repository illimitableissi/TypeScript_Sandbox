//Generic Types
// const names: Array<string> = []; // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done');
//     }, 2000);
// });

// promise.then(data => {

// })

//Object type doesnt provide any specific information

//T or U can be any object or any structure but it has to be an object
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Issi'}, {age:0});

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1 ) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }

    return [element,  descriptionText];
}

countAndDescribe(['Sports', 'Cooking'])

function exttrcatANdConvert<T extends object, U extends keyof T>(obj:T, key:U ) {
    return 'Value: ' + obj[key]
}

exttrcatANdConvert({name: 'Max'}, 'name')

//T is the type. So you can make a new object of strings, numbers, etc
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems(){
        return [...this.data]
    }
}

//data storage of strings only
const textStorage = new DataStorage<string>();
textStorage.addItem('Issi');
textStorage.removeItem('');
textStorage.getItems()

//data storage of numbers only
const numberStorage = new DataStorage<number>();

//data storage of objects only - wont work
// const objStorage = new DataStorage<object>();

//***Generic Utilities***

interface CourseGoal {
    title: string;
    description: string;
    completion: Date;
}

function createCourseGoal (
    title: string, 
    description: string, 
    date: Date
    ): CourseGoal {
        //Partial type wraps own type into a type where all properties are optional
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completion = date;
    return courseGoal as CourseGoal;
}

//readonly allows you to only view, not allowed to change/add properties
const names: Readonly<string[]> = ["", ""]
// names.push('')