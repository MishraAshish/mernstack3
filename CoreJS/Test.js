console.log("start")

let callbk = function(){
  console.log("second timeout");
}

//event loop : 
  setTimeout(function(){
    console.log("first timeout");
    setTimeout(function(){
      console.log("inner timeout");			
    },0);	
  },1000);

  setTimeout(callbk
  ,1000);
  
  setTimeout(function(){
    console.log("third timeout");
  },1000);

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