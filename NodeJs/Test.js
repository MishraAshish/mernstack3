let fsObj = require("fs"); //importing file system module in our code so that we can use it for accessing file

console.log("Read File Starts");
let fileData = fsObj.readFileSync('./Readfile.js','utf8');//this is a blocking code interpreter will not move to next line untill it gets executed

console.log(fileData);
console.log("Read File Ends");

//NonBlocking File Read - to make this code async we need to change with a method which implements callback

console.log("Async Read File Starts");

fsObj.readFile('./Readfile.js','utf8',(err, fileData)=>{ //error first call back : error will always be a first object when executes with node modules

    console.log("err", err);
    console.log(fileData);

});//this is a non-blocking code, interpreter will not need to wait to move to next line

console.log("Async Read File Ends");

//REPL : Read (Hoisting), Evaluate (Interpretation), Print(Execute on Stack) and Loop (loop)
//Break the loop using ctrl+c twice