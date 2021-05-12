type Combinable = number | string
type Conversion = 'as-number' | 'as-text'

//Can replace all union types with one name

//Union types

function combine (
    input1: number | string, 
    input2: number | string, 
    // input1: Combinable, 
    // input2: Combinable, 
    resultConversion: 'as-number' | 'as-text'
    // resultConversion: Conversion
    ) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
         result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    } 
    if (resultConversion === 'as-number') {
        // return parseFloat(result)
        return +result;
    } else {
        return result.toString()
    }
}

const combinedAges = combine(30,26, 'as-number');
console.log(combinedAges);

const combinedStrings = combine(30,26, 'as-number');
console.log(combinedStrings);

const combinedNames = combine('MAx', 'anna', 'as-text');
console.log(combinedNames)

