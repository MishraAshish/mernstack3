//var - is hoisted and functional scoped

//let and const : lexical scoped or block scoped or between curly brackets

{//functional scope
    var test = 25;
}

{//lexical scope or block scope
    let test1 = 25;
    const test2 = 25;
}

console.log("test "+test)
//console.log("test1 "+test1)
//console.log("test2 "+test2)


//2. var can be redeclared but let and const can't
 var test = 26;
 console.log("test second "+test)

let test1 = 25;
//let test1 = 25; // redeclaration is not allowed
test1 = 26; //reassignment is possible


const test2 = 25; //reassignment and redeclaration both are not allowed

console.log("let test1 "+test1)
console.log("const test2 "+test2)

//3.const : needs to be assigned a value (initialized) as soon as declared

const constInit = {
    name : "Tim",
    age : 25
};
console.log("const constInit ", constInit)

//4. const value can't be assigned later and but it is not immutable
//constInit = {username : "Randy"} //not allowed

constInit.name = "Christian";
constInit.username = "Jack";

console.log("const constInit ", constInit)

