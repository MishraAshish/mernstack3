//Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
//Allows us to use a lot of short hand methods to get, set, delete and do other operations without much pain
//remembers insertion order so the fetch is always easy compared to any other collection

let myMap = new Map(); 

let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

// setting the values 
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc'); 
myMap.set(keyNum, 'value associated with keyNum'); 

//console.log(myMap.size); // 3 // getting the values myMap.get(keyString); // "value associated with 'a string'" 
//console.log(myMap.entries()); 

console.log(myMap.has(keyObj));
//console.log(myMap.has({})); //reference
//console.log(myMap.has(function() {})); // reference

//console.log(myMap.has("a string"))
//console.log(myMap.has(2000))

// console.log(myMap.keys());
// console.log(myMap.values());
// console.log(myMap.get(keyFunc));

// console.log(myMap.delete(keyObj));

//  console.log(myMap.clear());
// console.log(myMap.entries());

//weak map and strong map


//Set : This also remembers insertion order and we have already implemented unique 

let Set1 = new Set(["Tim","Jack","Chris","Randy"]);

console.log(Set1.size)

console.log(Set1.has("tim"))
console.log(Set1.has("Tim"))

Set1.add("Chris");
Set1.add("chris");
console.log(Set1.entries());
console.log(Set1.values());

//create a set of animals 5-6