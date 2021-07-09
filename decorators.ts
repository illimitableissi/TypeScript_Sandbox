//***Decorators***

function Logger(logString: string){
return function(constructor: Function) {
    console.log(logString)
    console.log(constructor)
    };
} 

function WithTemplate(template: string, hookId: string) {
    return function(constructor: Function) {
    }
}

@WithTemplate('', 'app')
class Personz {
    name = '';

    constructor(){
        console.log('creating object')
    }
}

const pers = new Person();