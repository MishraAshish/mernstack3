//call stack : LIFO - last in first out

////call stack visualization upto and extent
function foo(){
    throw new Error("OOPs!");
    //console.log("Foo")
}

function bar(){
    
    // setTimeout(
    //     ()=>console.log("From Event-Loop"),
    // 1000);
    // console.log("Bar")

	foo();
}

function baz(){
    //console.log("Baz")
    bar();
}

baz();

//blowing up the stack : RangeError: Maximum call stack size exceeded

// function baz(){
// 	baz();
// }

// baz();