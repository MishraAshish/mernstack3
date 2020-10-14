//1. JS is case sensitive
//2. untyped : no restriction of type and can be assigned any value
//3. dynamic typing : it dynamically assigns the data type to identifier

//4. literals : create and object with key value pair to restrict the global direct access
//object literal and this acts as constant values or updatable objects

//single - line commenting
//commenting : ctrl+/
//uncomenting : ctrl+/

//multi line commenting
/*

var employee = {
    name : "Employee Name - Tim",
    age : "25"
}
*/

//5. Operators : >, <, ==, ===, !, &&, || -operands present in javascript
var userDetails =  { 
    name : "Randy", 
    age : 22,
    address : "Somewhere"
}

var employee = {
    name : "Employee Name - Tim",
    age : "25"
}


if (userDetails.age == employee.age) { //it compares the value only
//if (userDetails.age === employee.age) { //it compares the type and value both
    console.log("Yes age is Equal")   
}else{
    console.log("Yes age is not Equal")   
}

var isActive = false

if (isActive || employee.age == 22) {
    console.log("A healthy guy")
}
else if(!isActive && employee.age <= 22)
{
    console.log("Quite unhealthy guy")
}
else if(!isActive && employee.age <= 25){
    console.log("Super healthy guy")
}


console.log(25 + "25"); //2525

console.log(25- 10 + "25"); //1525

console.log("06"+ 25 - 10 + "25"); //061525 

console.log(35 - "25"); //negate - it wont treat string as string unless its actually a string
console.log(35 - "Jack"); //NaN - not a number

