//compilation step of javascript it pulls all the var's and function definitions at the top
//this process is termed as hoisting

//second step is evaluating everything and is termed as interpreter

//functions in javasript are termed as first class member citizens
//when function gets hoisted it holds the complete definition of it self

// printName("Randy")

// function printName(name){ //named function
//     console.log("The name is "+name)
//     //return name;
// }


// there is no concept of overloading in javascript functions

//we have only concept of over-writing, and last named function definition overwrites everything in execution
calculateArea(1);

function calculateArea(param){ //named function
    console.log("calculateArea 1 "+param)
    //return name;
}

calculateArea(2,2);

function calculateArea(param, param2){ //named function
    console.log("calculateArea 2 "+param +" "+param2)
    //return name;
}

calculateArea(3,3,3);

function calculateArea(param, param2, param3){ //named function
    console.log("calculateArea 3 "+param +" "+param2 +" "+ param3)
    //return name;
}

calculateArea();