//object : set of key value pair and gives us most of the the features close to classes

let user = {
    name : "Randy",
    age : 21,
    getName : function() {
        return this.name;
    }
}

//console.log(user.getName());

//inheritance using object a classes 

//one way is - we should avoid using this as it keeps prototype copied to the parent
// let employee = new Object(user);
// employee.address = "Somewhere on earth";
// console.log(employee.name);
// console.log(user.address);

//second way : this is the acceptable way of creating inheritance in objects, 
//this instead of copying object, copies the prototype chain so that the reference have one way flow
let student = Object.create(user);

student.address = "NY Street-33, USA";
student.name = "Jack";
student.getAddress = function () {
                        return this.address;
                    }

console.log("student "+student.getName());
console.log("student "+student.getAddress());
console.log(student.__proto__);

console.log("user "+ user.getName());

//how to break the prototype chain : pass null in the constructor
let nullPrototype = Object.create(null);
console.log(nullPrototype.__proto__);

//empty objects also have prototype chain
let emptyObject = {}; //Object.create({})
console.log(emptyObject.__proto__);

//Merging objects : Object.assign
//Data Copy : Object.assign to copy the data from one object to another
let Object1 = {a : "1", b : "2"}

let Object2 = {b : "2.2", c : "3"}

Object.assign(Object2, Object1, student);
console.log(Object2);

let Object3 = {};
Object.assign(Object3, Object2, Object1);

console.log(Object3);

//Object.values
console.log(Object.values(student))