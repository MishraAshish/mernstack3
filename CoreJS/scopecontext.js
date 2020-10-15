//scope and context : both refer to the "this" keyword in a function
//scope is the accessibility of things in executing function
//context refers to the object over which function being call/executed

name = "Global"
let obj1 = {
    name : "Christian", 
    age : 19,
    printDetail : function () {
        console.log("this in obj1 ", this);
        console.log("Name " + this.name)
    }
}

function printDetail() {
    console.log("this outside ", this);
    console.log("Name " + name)
}

printDetail();
obj1.printDetail();


setTimeout(function () {
    console.log("settimeout this ", this)
    console.log("value" + name)
}, 1000);