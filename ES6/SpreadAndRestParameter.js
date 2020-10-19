//Spread Operator : For any given array of values or objects we can convert the same by putting three dots ...array

let arr = [1,2,3,4,5,6];

console.log(arr);
console.log(...arr); // we spread the array arr[0], arr[1]

const num = [1,6,9,11,19,21]

function sum(a,b,c,d,e,f) {
    return a+b+c+d+e+f
}
console.log(sum(...num));
console.log(sum.apply(null, num)); //using apply

//Rest Parameter : This should be the last parameter to recieve in function and is recieved with ...array 

function sumUsingRest(...num) {
    console.log(num)
    //reduce operator - it remembers the last iterated value and iterates over the complete array
   let sum = num.reduce(function(prevValue, nextValue) {
       console.log(prevValue, nextValue);
       return  prevValue + nextValue;
    },0)

    return sum;
}

console.log(sumUsingRest(...num))


//using for loop create an array that can be dynamically incread upto 50 numbers
//use this array of numbers to pass in a function doSum
//pass this array as spread operator
//recieve the array as rest parameter and doSum using arr.reduce function
//print sum - if i choose 3 : [1,2,3] and sum - 6


