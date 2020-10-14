/*
console.log("start")

var name = "Jack"
var NAme= "Christian"

console.log(name +" "+NAme);

let callbk = function(){
  console.log("second timeout");
}

let Callbk = function(){
  console.log("third timeout");
}
//event loop : 
  setTimeout(function(){
    console.log("first timeout");
    setTimeout(function(){
      console.log("inner timeout");			
    },0);	
  },1000);

  setTimeout(callbk,1000);
  
  setTimeout(Callbk,1000);

console.log("end")


function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { 
        debugger;
        return x + y; };
  }
}

//console.log(sum(2,3));   // Outputs -
//console.log(sum(2)(3));  // Outputs -

let innerFunc = sum(2);
//let outPut = innerFunc(3);
//console.log("outPut ", outPut)
*/


//IIFE : Immediately Invocable Function Expression (Self Invocking Functions)

(function selfExecute(sessionname){
 
  console.log("Current session name is :"+sessionname)
  globalThis.user = {
    name : "Jack",
    age : 21
  }

})("MERNStack") //invoking immediately //module //module pattern

console.log("user ", globalThis.user);

//selfExecute("MERNStack"); //invocation of function
//selfExecute("MEANStack");
//selfExecute("JavaStack");