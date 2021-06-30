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

function exttrcatANdConvert(obj:object , key:string ) {
    return obj[key]
}