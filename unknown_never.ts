let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

//Will not work. unknown will need a type check
// userName = userInput;

if(typeof userInput === 'string'){
userName = userInput;
}   

//shouldnt use unknown all the time but better than using 'any

function generateError(message: string, code:number): never{
    throw {message: message, errorCode: code};
}

generateError('An error occured', 500) 