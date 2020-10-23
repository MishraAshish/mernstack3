//Filter, Map, Reduce and Some - Iterators
//Are advanced iterators, always give us a shallow copy of data present and 
//maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"}
];

//1. Print the persons saved by captain america
//We can't manipulate the given object in iteration
let personCA = personsList.filter((person)=> person.savedby === "CaptainAmerica");

console.log("Saved By CA", personCA);
//console.log("Core List", personsList);

//2. Print the person names saved by captain america
//map allows us to change the person in iteration
//let personCANames = personsList.map((person)=> person.savedby === "CaptainAmerica" ? {"saved name" : person.name, "new id" :person.id} : "").filter(p=>p!="")
let personCANames = personsList.map((person)=> person.savedby === "CaptainAmerica" ?  person.name : "").filter(p=>p!="")

console.log("Saved By CA Names", personCANames);
//console.log("Core List", personsList);

//3. Check if anyone saved by SpiderMan
//Some is the iterator which gives us a short circuit if condition is met

let anyOneSavedBySpiderMan = personsList.some((person)=>person.savedby === "SpiderMan")

console.log("Anyone Saved By Spider Man ",anyOneSavedBySpiderMan)
//console.log("Core List", personsList);

//4. How many people saved by each super hero
// Reduce is the iterator used to remember the previous value

let numberOfPersonsSavedByEachSuperHero = personsList.reduce((preViousVal, currentVal)=>{
    //console.log("preViousVal ",preViousVal)
    //console.log("currentVal ",currentVal)

    preViousVal[currentVal.savedby] = preViousVal[currentVal.savedby] ? preViousVal[currentVal.savedby]+1 : 1;
    return preViousVal;

}, new Set())

console.log("Saved By Each", numberOfPersonsSavedByEachSuperHero)
//console.log("Core List", personsList);


//1. Print the persons saved by IronMan
//2. Print the person names saved by IronMan
//3. Check if anyone saved by Hulk

//Practice Questions : 
let persons = [
    {id : 1, name : "Allen", tags : "javascript"},
    {id : 2, name : "Ram", tags : "javascript"},
    {id : 3, name : "Vennis", tags : "java"},
    {id : 4, name : "Scott", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. Name all having tag javascript
//2. List all objcts having tag java
//3. Check for any "c-sharp" tag present
//4. Count the number of people having tag javascript and java

// How to preserve the immutability on my heroes list?
// 1. Get heroes who are not evils
// 2. Print Unique family names
// 3. Print Hero Names from given objects, and append sir in each of them before printing

const heroes = [
    { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
    { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
    { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
    { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
    { name: 'Batman',         family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
    { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
    { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
    { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
  ]