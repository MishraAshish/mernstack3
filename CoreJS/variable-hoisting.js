//compilation step of javascript it pulls all the var's and function definitions at the top
//this process is termed as hoisting

//variable hoisting
//var name = undefined; //pulls at the top and assigns undefined as default

console.log("The First Thing server side execution");
//functions - used to provide behaviour in application and var - type to create identifiers

console.log("Hi ", name); //using a variable //out of reach compilation error
console.log("Age is ", age);

//var name = "Tim";
var name = "Tim"; //initialization of a variable
var age = 21;

console.log("Second Hi ", name); //using a variable
console.log("Second Age is ", age);


// different case of hoisting
//showName("Test");
// function expression
console.log(showName)

var showName = function (name){ 
    console.log("The name is "+name)
    //return name;
}