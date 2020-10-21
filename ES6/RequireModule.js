//Each javascript function or file is termed as module apart from the modules that we built as project like file uploader moduler
//import {Calculator, pie} from "./Class"; //named import
//import Calculator as DefaultCalCulator from "./Class"; //default import - without {}

let calcClass = require("./Class"); //classiccal/es5 way : importing a module

//console.log(calcClass);

 let calcObj = new calcClass.Calculator(10, 10)

 console.log(calcObj.multiply())
 console.log(calcObj.sum())

 console.log(calcClass.Pie);

 //Create a JS class car and return specifications(atleast 5) from methods for respective cars like : BMW, Toyota
 //Use this file in another javascript file to show the specifications : using require and module.exports