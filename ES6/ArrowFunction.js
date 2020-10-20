//An arrow function expression has a shorter syntax than a function expression : ()=>{} 
//does not have its own this, arguments, super or new.target.
//These function expressions are best suited for non-method functions, and they cannot be used as constructors.
//1. Shorter Syntax : () => {}

// let print = () => {console.log("Arrow Function")} 
// let print1 = () => console.log("Arrow Function1")

// print();
// print1();

// let sum = (a, b) => a+b;
// // function sum(a,b) {
// //     return a+b
// //}
// console.log(sum(5,6));

//write a arrow function which accepts 4 params first two to do sum and next 2 to do multiplication, then add both

//2. No scope of its own, "this" is not owned by arrow function, instead it copies the context of its parent
// eventually it resolves the scope issue

let user = {
    name : "Chris", 
    age : 25,
    getUserName : function() {
        //this : copies global
        console.log(this.name);     

        setTimeout(() => {     

            console.log(`The Name is ${this.name} and age is ${this.age}`);

        }, 2000);

    }
}

user.getUserName();

//resolve below function for print balance2
let Account = {
    balance : "$25000", 
    token : 25,
    printBalance : function() {
        console.log("Your Normal Balance Is : " + this.balance);
    },
    printBalanceAfter2Secnds : () => {

        setTimeout(() => {      
            console.log("Your Balance Is : " + this.balance);
        }, 2000);
    }
}

Account.printBalance();
Account.printBalanceAfter2Secnds();