// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow",
 dog = "Woof",
 bird = "Chrip",
 lion = "roar"

 anyObject = {
    cat : cat,
    dog : dog,
    bird: bird,
    lion: lion
}

//console.log(`anyObject `+ JSON.stringify(anyObject))
console.log(`anyObject `, anyObject)//use comma ,  to print object or JSON.stringify

//short hand in ES6
let shortHandObject = {
    cat,
    dog,
    bird,
    lion
}

console.log(`shortHandObject `, shortHandObject) 