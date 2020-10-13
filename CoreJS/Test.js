//3. Function expression not hoisted

//console.log(testFunc);
testFunc(); //undefined 1, error 3

//function expression
var testFunc = function funcHoist() {
  console.log("I am being hoisted.");
}