//Generator Functions: Allows us to get multiple yields (or kind of returns) for the indefinite number of times
// without creating and invocation of the function

// (function name() {
//     console.log("Test Me")   
// })() //self invocking one time only

// function *printValue(num) {
//     //do any asyn operation to read the value
//     let updatedValue = 300;
//     yield num+updatedValue;
//     yield num*updatedValue;
//     yield num+num*updatedValue;
//     yield num*num*updatedValue;    

//     return "Done";// as soon as we return function invocation completes and we can't yield further
//     yield 25;
// }

// let printValueObj = printValue(10);

// console.log(printValueObj.next().value)
// console.log(printValueObj.next().value)
// console.log(printValueObj.next().value)
// console.log(printValueObj.next().value)
// console.log(printValueObj.next().value)


//Arithmatic Calculator

function *arithmetic(num1, num2){
    
    yield console.log("Addition : " + (num1+num2));
    yield console.log("Subtraction : " + (num1-num2));
    yield console.log("Multiply : " + (num1*num2));
    yield console.log("Division : " + (num1/num2));
    
    return "Done";
}
let calObj = arithmetic(6,2);

calObj.next()
calObj.next()
calObj.next()
calObj.next()
console.log(calObj.next())
console.log(calObj.next())


let calObj1 = arithmetic(78599,25);

calObj1.next()
calObj1.next()
calObj1.next()
calObj1.next()